
const may27th = `I know how this website of mine has made you feel. 
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
<br><br> With love,
<br> Your husband.
<br><br>
May 27, 2023`

const may28th = `I'm sorry about today ;/
I don't know what happened but I'm telling you I am and will work so hard to stop anything like today from happening again.
I don't want it to seem like part of the pattern the next time it happens, but something excuseable and different from the norm.
There are so many things for me to work on when you're away, and I am going to do have to do so much of it alone this time.
We might have less time together than we did last summer, where I would wake up and sleep to accommodate for your timings, and my days were completely free for you.
That won't be the case anymore. My schedule will be strict, my love. 
I'm so worried about what our summer will be like I can't help but find ways now to ease the transition on your very first day there.
Every day I get closer to it my throat gets heavier. 
This is a pain that won't go away for the next 3 months, and will be the worst on the day you leave.
It will get easier as the days count down till the day you come back, and I'm praying we find as many ways possible to maximize the amount and quality of our time together this summer.
I want to do so many things for you while you're gone and you will be back in time close to your birthday!
It's crazy how time flew by since your last, and the summer seems like it will be shorter than the last.
If we spend it in happiness, the summer will fly by.
If we tell ourselves the things we do when you're away are enough and equivalent to the games we play when you're here and the time we spend, we will be okay, I promise you that.
We just have to think of it like school is starting again and we can't hangout as much!
We're both just busy with school baby!
Last summer, we took no steps forward and a lot of steps back until the very end, but this year we will continue to fight the tides and swim above the water, I promise you that too.
We finished pinocchio today and I'm so sad ;( Weeeee.
I can't wait for all the other things we will watch and play when you're in palestine!
If we spend less time playing things we can spend more time watching shows, just like we did this week!
New K Dramas and animes and Last of Us... we have so much to watch!
So many games for us to play too! Yes they're not val or overwatch, but this will help us get a break from them.
We will get to relax and play cuter more relaxing games and widen our library of games.
I will research everyday more games we can play shows we can watch.
I might have to start getting up super duper early....but let's see how it goes baby.
I love you so much bubby. You making me tear up. I don't want you to go.
I love you more today than I've ever loved you in the past.
I will write these letters to you every single day. I will make you happier going forward than you've ever been.
I will show you the love I found today that you couldn't see yesterday, and the love tomorrow you can't see today.
I want to get closer everyday to bringing you peace and ease and I want to outdo all the expectations you could possibly have, my princess.
I can't wait to continue to show you what you mean to me.
<br><br> With love,
<br>Your husband.
<br>
<br>May 28th, 2023`

const strings = {
    may27th,
    may28th
  };
  
  $(document).ready(() => {
    let currentString = null;
  
    // Populate the log with string names
    const logContainer = $(".log");
    Object.keys(strings).forEach((stringName) => {
      const stringDate = stringName.slice(-4)
    //   console.log(stringSeparate)
      const stringMonth = stringName.substring(0, stringName.length -4)
      const monthCap = stringMonth.charAt(0).toUpperCase() + stringMonth.slice(1);
      const logEntry = $("<div>").text(`${monthCap} ${stringDate}`).addClass("log-entry").attr(`id`, stringName);
      logContainer.prepend(logEntry);
    });
  
    // Handle click event on string names
    $(".log-entry").click(function () {
        console.log(`hi`)
      const stringName = $(this).attr(`id`);
      currentString = strings[stringName];
      $(".today").html(currentString); // Update the content of the "today" paragraph
      showBackButton();
  
     
    });
  
    // Handle back button click event
    $(".back-button").click(function () {
      currentString = null;
      $(".today").empty(); // Clear the content of the "today" paragraph
      hideBackButton();
    });
  
    // Show back button
    function showBackButton() {
      $(".back-button").removeClass("hidden");
    }
  
    // Hide back button
    function hideBackButton() {
      $(".back-button").addClass("hidden");
    }
  });
  