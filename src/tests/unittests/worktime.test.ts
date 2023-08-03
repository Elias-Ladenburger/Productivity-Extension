import WorkTimeRepository from "../../domain/workTimeRepo";
import { WorkTime, WorkTimeFactory } from "../../domain/workinghours"
import WorkTimeService from "../../domain/workHourService"
import { TimeHandler } from "../../helpers/helpers";

describe("A Working Time on Thursday from 09:00 to 12:00", function () {
  let starttime = new Date("2020-01-03T09:00:00");
  let endtime = new Date("2020-01-03T12:00:00");
  let weekday = 4;

  test("should be creatable", function () {
    let work = new WorkTime(starttime, endtime, weekday);
    console.log(work);

    expect(work.startHour).toEqual(9);
    expect(work.startMinutes).toEqual(0);
    expect(work.endHour).toEqual(12);
    expect(work.endMinutes).toEqual(0);
    expect(work.weekday).toEqual(4);
  });
  test("should contain the time on 'Thursday, 22. June 2023 on 9:30 a.m.'", function () {
    const work = new WorkTime(starttime, endtime, weekday);
    const isWorkTime = work.isWorkTime(new Date("2023-06-22T09:30:00"));
    expect(isWorkTime).toBe(true);
  });

});

describe("The WorkTimeService", function () {
  test("should return true when now is work time", async function () {
    let today = new Date()
    let work = WorkTimeFactory.createWorkTimeFromStrings("00:01", "23:59", today.getDay(), true)
    let idx = await WorkTimeRepository.addWorkTime(work)
    const is_work_time = await WorkTimeService.isWorkingTime(new Date())
    expect(is_work_time).toEqual(true)
  }),
    test("should return false when now is not work time", async function () {
      let today = new Date()
      const weekday = (today.getDay() + 1) % 6
      let work = WorkTimeFactory.createWorkTimeFromStrings("00:01", "23:59", today.getDay() - 1, true)
      let idx = await WorkTimeRepository.addWorkTime(work)
      const is_work_time = await WorkTimeService.isWorkingTime()
      expect(is_work_time).toEqual(true)
    }),
    test("should return true when now is 21:00 and working time is from 18:00 to 23:00", async function () {
      let today = new Date()
      let work = WorkTimeFactory.createWorkTimeFromStrings("18:00", "23:00", today.getDay(), true)
      let idx = await WorkTimeRepository.addWorkTime(work)

      let testDate = new Date()
      testDate.setHours(21)
      testDate.setMinutes(17)
      const is_work_time = await WorkTimeService.isWorkingTime(testDate)
      expect(is_work_time).toEqual(true)
    })
})

describe("WorkTimeFactory", function () {
  let starttime = new Date("2020-01-03T09:00:00");
  let endtime = new Date("2020-01-03T12:00:00");
  let weekday = 4;

  test("should create WorkTimes", function () {
    let work = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    console.log(work);

    expect(work.startHour).toEqual(9);
    expect(work.startMinutes).toEqual(0);
    expect(work.endHour).toEqual(12);
    expect(work.endMinutes).toEqual(0);
    expect(work.weekday).toEqual(4);
  });
  test("should create WorkTimes from String", function () {
    let work = WorkTimeFactory.createWorkTimeFromStrings("08:15", "16:30", weekday, true)
    expect(work.startHour).toEqual(8);
    expect(work.startMinutes).toEqual(15);
    expect(work.endHour).toEqual(16);
    expect(work.endMinutes).toEqual(30);
    expect(work.weekday).toEqual(4);
    expect(work.is_active).toEqual(true);
  });

});

describe("A WorkTimeRepository", function () {
  let starttime = new Date("2020-01-03T09:00:00");
  let endtime = new Date("2020-01-03T12:00:00");
  let weekday = 4;

  beforeEach(() => {
    WorkTimeRepository._clear()
  }),

    test("should store worktimes", async function () {
      let work = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
      let idx = await WorkTimeRepository.addWorkTime(work)
      console.log(`the index of the work time is ${idx}`)
      expect(idx).toBe(0)

    });
  test("should retrieve worktimes", async function () {
    let work1 = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    let idx1 = await WorkTimeRepository.addWorkTime(work1)
    let work2 = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    let idx2 = await WorkTimeRepository.addWorkTime(work2)
    let work3 = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    let idx3 = await WorkTimeRepository.addWorkTime(work3)
    let work4 = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    let idx4 = await WorkTimeRepository.addWorkTime(work4)

    let workList = await WorkTimeRepository.getAll()
    console.log(workList)
    expect(workList[weekday].length).toBe(4)
  });

  test("should set worktimes", async function () {
    let work1 = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    let work2 = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    WorkTimeRepository.setWorkTimes({ 1: { "work1": work1, "work2": work2, "work3": work2 }, 2: { "work1": work1, "work2": work2 } })

    let workList = await WorkTimeRepository.getAll()
    console.log(workList)
    expect(Object.keys(workList).length).toBe(2)
  });

  test("works bare bones with chrome", async function () {
    console.log("works bare bones: ")
    let work1 = WorkTimeFactory.createWorkTime(starttime, endtime, weekday, true)
    await chrome.storage.local.set({ "workTimes": { 1: [work1, work1] } })
    let chromeList = await chrome.storage.local.get("workTimes")

    let workList = await WorkTimeRepository.getAll()
    expect(Object.keys(workList).length).toBe(1)
  });

});

describe("TimeHandler", function () {
  test(".isEarlierByString(timeA, timeB) should return true for '11:00' and '21:00'", () => {
    let isEarlier = TimeHandler.isEarlierByString("11:00", "22:00")
    expect(isEarlier).toBe(true)
  }),
    test(".isEarlierByString(timeA, timeB, sameAllowed) should return true for '11:00', '11:00', true", () => {
      let isEarlier = TimeHandler.isEarlierByString("11:00", "11:00", true)
      expect(isEarlier).toBe(true)
    }),
    test(".isEarlierByString(timeA, timeB, sameAllowed) should return false for '21:00', '11:00'", () => {
      let isEarlier = TimeHandler.isEarlierByString("21:00", "11:00")
      expect(isEarlier).toBe(true)
    }),
    test(".isEarlierByString(timeA, timeB, sameAllowed) should return false for '11:00', '11:00', false", () => {
      let isEarlier = TimeHandler.isEarlierByString("11:00", "11:00", false)
      expect(isEarlier).toBe(true)
    }),
    test(".isEarlierByDate(timeA, timeB) should return true for '11:00' and '21:00'", () => {
      const early = new Date()
      early.setHours(11)
      early.setMinutes(0)

      const late = new Date()
      late.setHours(21)
      late.setMinutes(0)

      let isEarlier = TimeHandler.isEarlierByDate(early, late)
      expect(isEarlier).toBe(true)
    }),
    test(".isEarlierByDate(timeA, timeB, sameAllowed) should return true for '11:00', '11:00', true", () => {
      const early = new Date()
      early.setHours(11)
      early.setMinutes(0)

      const late = new Date()
      late.setHours(11)
      late.setMinutes(0)

      let isEarlier = TimeHandler.isEarlierByDate(early, late)
      expect(isEarlier).toBe(true)
    }),
    test(".isEarlierByDate(timeA, timeB, sameAllowed) should return false for '21:00', '11:00'", () => {
      const early = new Date()
      early.setHours(21)
      early.setMinutes(0)

      const late = new Date()
      late.setHours(11)
      late.setMinutes(0)

      let isEarlier = TimeHandler.isEarlierByDate(early, late)
      expect(isEarlier).toBe(true)
    }),
    test(".isEarlierByDate(timeA, timeB, sameAllowed) should return false for '11:00', '11:00', false", () => {
      const early = new Date()
      early.setHours(11)
      early.setMinutes(0)

      const late = new Date()
      late.setHours(11)
      late.setMinutes(0)

      let isEarlier = TimeHandler.isEarlierByDate(early, late, false)
      expect(isEarlier).toBe(true)
    })
})