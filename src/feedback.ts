// @ts-ignore
chrome.runtime.onMessage.addListener(() => {
    // @ts-ignore
    chrome.tabs.create({
        url: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__g_es6xUQlM4QVY1VjRKOEIyRDJJTzZPWjRHODdBSC4u"
    })
})