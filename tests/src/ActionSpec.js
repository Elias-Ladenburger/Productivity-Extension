describe('The Action Factory', function () {
  it('should create Popup Actions', function () {
    let action = ActionFactory.createAction(ActionType.POPUP, "some text!")
    expect(action).toBeInstanceOf(PopupAction)
    console.log(action.toString())
  })
  it('should create Redirect Actions', function () {
    let action = ActionFactory.createAction(ActionType.REDIRECT, "some text!")
    expect(action).toBeInstanceOf(RedirectAction)
    console.log(action.toString())
  })
  it('should create Frame Actions', function () {
    let action = ActionFactory.createAction(ActionType.FRAME, "red")
    expect(action).toBeInstanceOf(FrameAction)
    console.log(action.toString())
  })
})
