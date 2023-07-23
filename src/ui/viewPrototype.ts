

interface ViewPrototype {

    addEntry(entry): void,
    clearEntries(): void,
    removeEntry(id: string): void,
    isFormEditMode(editMode: boolean): void,
    getFormData(): any,
    clearForm(): void,
    setFormValues(formValues: any, entryID: string): void
}