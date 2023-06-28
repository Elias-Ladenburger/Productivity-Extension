describe("A Working Time on Thursday from 09:00 to 12:00", function () {
  beforeEach(function () {
    starttime = "2020-01-03T09:00:00";
    endtime = "2020-01-03T12:00:00";
    weekday = 4;
  });

  it("should be creatable", function () {
    let work = new WorkTime(starttime, endtime, weekday);
    console.log(work);

    expect(work.startTime).toEqual("9:0");
    expect(work.endTime).toEqual("12:0");
    expect(work.weekday).toEqual(4);
  });
  it("should contain the time on 'Thursday, 22. June 2023 on 9:30 a.m.'", function () {
    const work = new WorkTime(starttime, endtime, weekday);
    const isWorkTime = work.isWorkTime("2023-06-22T09:30:00");
    expect(isWorkTime).toBe(true);
  });
  it("should contain be creatable with only hours", function () {
    starttime = "09:00:00";
    endtime = "12:00:00";
    starttime = new Date()

    const work = new WorkTime(starttime, endtime, weekday);
    expect(work.startTime).toEqual("9:0");
    expect(work.endTime).toEqual("12:0");
    expect(work.weekday).toEqual(4);
  });
});
