

test('test ProdRule creation', () => {
    let newEntry = new ProdRule(
        actionSource.value,
        new Action(actionType, targetVal.value),
        actionCondition,
        actionDelay
    )
    print(newEntry.toString())
})