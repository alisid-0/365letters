console.log(`hi`)

deepai.setApiKey(`a676cf51-13ea-4d1d-ab22-9283fd2968ce`)

params = [`sad`, `love`, `sexual and erotic`]

words = [`beebee instead of baby`, `batatas instead of boobs`, `ta2a instead of pussy or dick`]

story = `Jenin is my fiance. She is the most beautiful girl in the world I have ever seen. We have had a rocky relationship, but we are always working to improve it. We have overcome so many obstacles and are finally in a good place, moving forward.`

events = [`meeting her at perkins for the first time`, `walking arm-in-arm to perkins`, `missing her because she is leaving to palestine for the summer`, `playing overwatch`,`spending all day together on a call`]

const getResponse = async()=>{
    let result = await deepai.callStandardApi("text-generator", {
        text: `Write me a letter in first person randomly picking from one of the types(love or sexual), from Ali, the fiance that you're taking the role of, to his fiance, jenin. use the word "batatas" instead of boobs sometimes. use the word "bubby" instead of baby every letter and YOU HAVE TO talk about how you miss playing the game overwatch with her every letter.`
    });
    console.log(result)
    $(`.output`).html(result.output)
    if ($(`.output`).html != ``){
        $(`.lds-heart`).remove()
    }
}
(async () => {
    const response = await getResponse();
    console.log(response);
  })();

