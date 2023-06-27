describe("Working Times", function () {
  beforeEach(function () {
    badWebsite = "*.unproductive.com";
    condition = ActionCondition.ALWAYS;
    delay = 0;
  });

    it("should be creatable", function () {
      let work = new WorkTime("2020-01-03T01:12:12", "2020-01-03T08:12:12", 4);

      expect(work.starttime).toEqual("1:12");
      expect(work.endtime).toEqual("8:12");
      expect(work.weekday).toEqual(4);
    });
});
