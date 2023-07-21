import {WorkTime, WorkTimeFactory } from "../../domain/workinghours"

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
  test("should trigger worktime today", function () {
    let today = new Date()
    let weekday = today.getDay()
    let work = WorkTimeFactory.createWorkTimeFromStrings("00:01", "23:59", weekday, true)
    expect(work.isWorkTime()).toEqual(true)
  })

});
