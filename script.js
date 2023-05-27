console.log(`hi`)

deepai.setApiKey(`a676cf51-13ea-4d1d-ab22-9283fd2968ce`)

params = [`sad`, `love`, `sexual and erotic`]

words = [`beebee instead of baby`, `batatas instead of boobs`, `ta2a instead of pussy or dick`]

story = `Jenin is my fiance. She is the most beautiful girl in the world I have ever seen. We have had a rocky relationship, but we are always working to improve it. We have overcome so many obstacles and are finally in a good place, moving forward.`

events = [`meeting her at perkins for the first time`, `walking arm-in-arm to perkins`, `missing her because she is leaving to palestine for the summer`, `playing overwatch`,`spending all day together on a call`]

const getResponse = async()=>{
    let result = await deepai.callStandardApi("text-generator", {
        text: `Write me either a love letter or a sexual letter or a sad letter in first person, from Ali, the fiance that you're taking the role of, to his fiance, jenin. use the word "batatas" instead of boobs sometimes. use the word "bubby" instead of baby every letter and talk about how you miss playing "overwatch" with her.`
    });
    console.log(result)
    $(`.output`).html(result.output)
    if ($(`.output`).html != ``){
        $(`.lds-heart`).remove()
    }
}
// (async () => {
//     const response = await getResponse();
//     console.log(response);
//   })();



const mar27 = `I know how this website of mine has made you feel. 
I had something <em>grand</em> planned for you, but it was unfinished. 
I should have waited before I got your hopes up only to kill them.
This website is a reminder that things will be different, and will continue to. 
I want you to know that things really will be different this time, compared to the last summer.
You left last year unsure, unhappy, heartbroken, and disgusted.
I want you to leave this time knowing you have someone waiting that truly loves you and cares about you.
Someone that can't sleep without you.
Someone that still needs you as their alarm in the morning.
I meant everything I said that day.
I want to carry your fragile little self up the mountain.
I want to toughen up my body for the world and I want to soften my hands for you.
I want to show you what you mean to me instead of just telling you.
I want to show you with my words instead of just telling you with my words.
Does that make sense?
I love you so much and I want to continue to water you and our love every single day.
I require a few things from you too.
I require patience. I need you to be more patient with me.
I need you to try and let go of who I once was, just as I did with you.
Don't tell me whose pain was worse because you can't compare that.
I need you to understand where I come from when I speal today, and to not put my words into the Ali of the past.
I can't grow if you do that. I can't grow if you make me believe I can't grow.
I'm not saying you do it or you don't, I just want to lay this boundary now.
We aren't who we were, and we won't be soon who we are.
We can't want to move forward while looking back.
I need you to know that this summer is going to be very difficult for me.
I'm going to miss you an <em>unimaginable</em> amount and I'm going to do absolutely everything it takes for us to get to that next level.
You make me swoon. You make me blush. You give me confidence. You fight with me then give me bose. We play and watch and laugh and cry and fight and have ta2a time. I'm with you every breath I take away from work and now I have no idea what our lives will look like for the next 3 months. 90 days.
This letter is half written now and the other half is what I had written down to add to the site when I learn to create databases in my next unit in bootcamp.
I wanted to die last night after feeling like I failed you yet again after just turning a new leaf earlier this week.
You just told me <em>I don't trust you when you say that</em> after I said <em>You'll like it</em> ;/ 
I don't want you to ever ever ever EVER feel that way again. I love you more than anything.
Think about it for a second.
What do you see me loving?
What proof do you have I don't love you more than anything?
Can you prove that false rumor?
Can you prove that false rumor when you say <em>You don't love me anymore?</em>
I love you Jenin. I have to stop writing here because you're getting angry...
:) I can't wait to watch this next episode with you!

March 28, 2023`
$(`.today`).html(mar27)