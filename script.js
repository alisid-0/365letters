console.log(`hi`)

deepai.setApiKey(`a676cf51-13ea-4d1d-ab22-9283fd2968ce`)

params = [`sad`, `love`, `sexual and erotic`]

words = [`beebee instead of baby`, `batatas instead of boobs`, `ta2a instead of pussy or dick`]

story = `Jenin is my fiance. She is the most beautiful girl in the world I have ever seen. We have had a rocky relationship, but we are always working to improve it. We have overcome so many obstacles and are finally in a good place, moving forward.`

events = [`meeting her at perkins for the first time`, `walking arm-in-arm to perkins`, `missing her because she is leaving to palestine for the summer`, `playing overwatch`,`spending all day together on a call`]

const getResponse = async()=>{
    let result = await deepai.callStandardApi("text-generator", {
        text: `Write me a letter in first person randomly picking from ONLY one of the types in ${params}, from Ali, the fiance that you're taking the role of, to his fiance, jenin. Pick some words to use occasionally, along with the word they replace: (use beebee instead of baby, use batatas instead of boobs, use ta2a instead of pussy,). Include something from ${events} if possible.`
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

