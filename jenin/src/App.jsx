import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'

function App() {

  const may26th = `I know how this website of mine has made you feel. 
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
  May 26, 2023`
  
  const may27th = `I'm sorry about today ;/
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
  <br>May 27th, 2023`
  
  const may28th = `I'm going to miss you so much. Every hour that we get closer to your last gets infinitely harder. I'm worrying about different ways for us to spend our time. Better ways to spend our time.
  But the more I look for better things to do, the more I realize that it really is all just the same as long as I have time with you. As long as we're doing anything at all. The thought is comforting and makes the summer seem easier.
  What worries me about summer isn't not being able to play but it's the time difference combined with our schedules. I can't wake up and sleep with you anymore. That's the hardest part.
  I can't fall asleep to your voice, but you can to mine. You can call me whenever at any time of the day, but I can't do it with you if you're in the room with others, which you will be, unless I text you and you call me and we sit in silence.
  We each will have similar yet different struggles this summer. You can call me to fall asleep with me any time, but I can not do that with you. I need you when I sleep. I need you to explain something to me.
  Tell me about some new skincare. Tell me about how Ulta points work. Tell me about it all and do it all over again a thousand times. I love it the same every single time. I will never get bored of your words that put me to sleep and will always love them more the second time.
  Put me to sleep Jenin. When will you be able to put me to sleep again? It'll be 8am for you when I'm sleeping. How can I go 3 months without you putting me to sleep? How can you think this is going to be harder for you?
  You're going to be in a different place that isn't full of memories with you. A refreshing change of pace filled with people and activities and community. I am noneney here. I'm all alone. 
  My days will be quiet and my nights quieter. I will be living in sadness looking over at my phone every second to see if you woke up in the middle of the night and need me enough to fight your sticky eyes and text me, until you fall asleep again.
  I won't know when you fall asleep. I won't be able to hear your breaths get heavy and loud and slow. I won't be able to hear you shift around in the middle of the night. I won't be able to feel your anger when I wake up late.
  I won't be able to finish my class knowing I have you waiting for me, because you'll be getting ready for bed in a room with 2 other people. We're going to lose some of our most intimate moments and you will be surrounded by people throughout that hardship, but I will be left here all alone.
  A house much quiter than the one I was in last summer. When mama passed, the house died. You keep my house alive Jenin. My house is going to be dead this summer. I am going to start looking to start a new life somewhere else and make plans to leave this house without hearing your laughter and anger sitting in this basement I fell in love with you in. The room we shared so many emotions in. The room I spent hundreds of hours playing the piano for you in. 
  Nothing is going to be the same again after you leave this summer. I love you more than last year and you love me more too. I don't know what to do with myself when I'm not around you.
  <br><em>You're all I know.</em><br>
  Let's wake up and go back to the start of this month. This has been the most beautiful peaceful month I've had with you. We haven't talked about it, but we've fought the least this month.
  We've been the most hopeful for the future this month. We've started looking forward. We've made so much more time out of the less time we've had this month.
  I don't want you to go and it's breaking me. It's hitting me so hard right now as I type this letter. Why does it feel like I'm losing you? <br>
  Why does it feel like I'm saying goodbye? Why is your laughter playing back in my head again and again and again? <br> Why is it already beginning to feel like a memory?
  Why is it fair I get 2 hours a day with you if I'm lucky? I don't want to make you sad. I know the last few letters and even the beginning of this letter seemed happy and hopeful, but I'm so sad now.
  I will destory absolutely EVERYTHING if I feel you move even an inch farther away from me this summer. An ounce of love lost is all of love lost, and I'm serious. I need updates from you as often as you possibly can. There is no sitting on your phone allowed when we're both awake and you have the chance to text me. You chose to leave me alone here and you have to make it up somehow.
  I want to throw a brick at your face for breaking my heart, but I love you and you're my littlest lily of the valley and I must carry you to the top of this mountain, no matter how tall it is. I love you and I'm sorry for making this letter sad but I can't even believe how sad this is making me. I thought I would handle it well, but honestly I have no idea how to. 
  I need you to take the planning of our schedules seriously. Please. I'm telling you Jenin, you are all I have. I don't want to go to school anymore for 3 months. I want to hang out with you after school. I don't wanna do my homework. I wanna skip class and meet you in the hallways. I want to get in my car and drive us around during school hours. I don't care about stupid school anymore. I want to get away. With you. Please let me ruin your schedule. Please grant me that gift. And please find ways to show me your love when you're there. When we can't send each other gifts. When we have 2 hours a day together. Please find something and help us. I love you Jenin. I typed this letter out completely with one hand because I didn't have bandaids small enough for my finger and it's making it real hard to use my left hand to type. I'm sitting here waiting for you very patiently. It has been 20 minutes. You lied to me ;/ I miss you baby. Please hurry. It's our last night together. 
  I love you Janooti. Ba7ebek too much!!!
  <br><br>With love,<br><br>
  Your husband.
  <br><br> May 28th, 2023`
  
  const may29th = `I can't do this. I miss you so much today. I miss you an unbelievable amount Jenin. I want to be there with you. I want to tell them I need you and I want to bring you back home. I don't know what to do with all this time if it isn't spent with you.
  Why do I have to decide between sleeping for a successful day the next day and just giving you time? Why is something as simple as you going on vacation such a cruel situation for me? I'm noneny. I'm so incredibly noneny now and I really hope it gets better. 
  I played outlast trials with Alex today and it was fun! And before that I had a medium prime rib steak at outback steak house and baby... it was TOO YUMMY NUMMY. Seasoned so well, juicy tender meat and it was just too good. 1800 calorie cut of meat. Sohail Bhaiyya got a filet mignon, and it literally looked like a little meat nugget. What an absolute waste of money. 500 calories for the same price because filet mignons are the most expensive worthless cut of meat. Literally does not fill you up at all for 30 dollars. 30. dollars. 500 calories. meat nugget. I was so sad for him Imlattam.
  After that I played outlast trials and had fun and missed you. Missed how you would scream and get mad at everyone and laugh and make my heart happy ;(. After that I set up yuzu, my switch emulator and got skyward sword working on my PC!! Took an hour to set up properly and then I played for an hour (spent most of it optimizing my emulator settings you know how I am baby). I love the game so far I think I'm really going to love this whole series! After that I played some val deathmatches and was about to queue for val and I got a text from you and my heart sank and I dodged and closed everything everything and ran to the media room couch to speak to my baby! 
  I had the slowest most boring day of my life today. Tomorrow's letter will be a better letter because I can talk to you about the things I'm learning! I loved hearing your voice after so long. I wish your airport wifi didn't completely suck ass, but that's okay. I got to sleep on the phone with you until you hung up while I was awake and didnt text me at all which broke my heart but it's fine. I still love you more today than I did yesterday bubby. Maybe this time apart will help us appreciate each other more and allow ourselves to grow and focus on ourselves when we don't have each other for most of the day. I'm looking forward to the changes I'm going to make and the ones you will too. Any way possible, we have to make some kinds of meaningful changes baby, okay?
  <br><br> I love you my princess. I will come save you my princess.<br><br> With love, <br><br> Your husband. <br><br> May 29th, 2023.`
  
  const may30th= `Hi baby! I’m so happy we watched the last of us today ;) 
  I wish you would wake up later but that’s okay baby you’re jetlagged I know that baby. 
  As I’m typing this, surge isn’t working how I want it to, 
  but it should be working when you next see it baby!! 
  90 letters for you to read! I don’t know what to do with my day Janoonti. 
  I don’t look forward to finishing class because I’m just sitting there doing nothing 
  finding something to do. Today I started learning about MongoDB! 
  We’re creating databases for our backend. The backend is what’s behind the scenes on the 
  apps and sites you use. This next unit is going to be harder because the backend is a 
  LOOOOT more code. Tomorrow’s homework is going to be rough I have a feeling because 
  today is just the introduction into installing it, what it is, etc. I worked out today 
  and felt too strong baby!! I want you to know I’m always here for you, no matter how far 
  apart we are. Our love will always be stronger than the distance, I promise.
  I wish we could sit and play overwatch again. I miss hearing your anger and laughter and calling yourself cracked and telling everyone on the team they're actually stupid as shit.
  I really don't have much else to say apart from how much I miss you. I miss you so much.
  My day used to be filled with you and now I just sit in sadness with a heavy throat.
  I want us to work on ourselves with this time apart, and I really hope we come out of this bigger and different people, that are better for each other.
  I got a booboo on my finger i accidentally cut it i dont remember if it was today or yesterday but it was on the cookies box every time i bend my lirol finger my skin opens and spreads apart and it burns but im a man so i dont care there is no pain.
  Anyways bubby once surge is back and running you should be able to see this letter my love and I can't wait for the day that it doesn't just completely stop working on your end because that is pissing me off and I know that, apart from surge being down during deployment which won't let me deploy the site, that when it's actually running like every other day, that it is completely your fault that the site does not work and it is on your phone only.
  Bye now baby, I love you too muchies!
  <br><br>With love,<br><br>
  Your husband.<br><br>
  May 30th, 2023`
  
  const may31st = `Hi my lovely princess darling cupcake sugar sweetie honey caramel sauce-filled ta2a baby! I feeling some ta2a time inside me...I need you back home baby.
  We both have needs to take care of so ta3ali come let's take care of them econo lodge style...hehehe...Also I just realized that I named all the letters wrong. Since I was writing them at the end of the day after midnight, I was naming of the day I was writing the letters on and not the day that the letter talks about. Writing after the day is over after midnight doesn't mean I have to change the whole date on it..I sorry I stupid baby. When you see these, the dates should be updated properly my love.
  Aaaaand...done. I updated it baby!! We watched the second episode of the last of us and my life flashed before my eyes when I saw an inappropriate scene. It made me so sad I had to immediately look up the parental guide on IMDB to see if the show is okay for us to watch or not. We decided everything was pretty skippable, so it's okay. That first scene was probably the least skippable one because they really threw that one on us out of nowhere. Wahhhhhh. There's a little tiny bug flying around this room and it is pissing me off so bad.
  I can't even find it but it keeps tickling me. OH GUESS WHAT ELSE HAPPENED TODAY. I WAS UPSTAIRS LOOKING FOR FOOD AT NIGHT AND AMAAN AND I WERE IN THE KITCHEN
  AND I SAW A HUUUUUGE SPIDER ON THE WALL IT WAS SO HUGE BUT SO THIN IT ALMOST LOOK LIKE A MOSQUITO BUT IT WAS A SPIDER. I THOUGHT IT WAS
  A FLY AT FIRST BECAUSE IT LOOOKED LIKE IT WAS FLYING AROUND THE ROOM, BUT IT LOOKED LIKE THAT BECAUSE IT'S LEGS WERE SO INCREDIBLY MASSIVE IT WAS ABLE TO GET FROM ONE CORNER TO THE OTHER IN HALF A SECOND!!!!
  SO I TOOK MY SLIPPER OFF, THREW IT AT THE WALL, MISSED THE SPIDER, AND THEN...the spider disappeared. I lost it. I wanted to kill myself but after a second I was like ok what the hell
  and i just walked past where it was put my slipper back on and went back downstairs. i was like dees. <br><br>
  I really hope we play something tomorrow. I miss playing games with my baby you know? And baby, you HAVE to wake up later tomorrow I will not allow you to wake up at freaking 4 am again. Not happening whatsoever. Anyways baby I'm going to stop writing here I'm breaking my head over today's homework ;_;<br>
  I love you janoonti and I will crawl to the ends of the earth if that's what it took to keep you in my life.<br><br>With love,
  <br><br> Your prince.<br><br>
  May 31st, 2023`
  
  
  
  const aLetterToTheFuture = `Hi my lovely ;) <br><br> You're probably reading this for the first time sometime after the 7th of June 2023 when I'm writing this, 
  but my wish is for you to come back to this some day when we're married.<br><br>
  As of today, we're growing. We're getting better. We're not married yet! Can you believe that?? But all we do is think about our marriage. All we do is dream. Dream to be where you are today.
  How was the wedding baby? Was it everything you asked for? Did you, deep down, actually want a big wedding but told me long ago that you wanted a small one? <br><br> 
  Did we dance at the wedding? Do you still talk to me often about the song we danced to? <br><br> 
  OOOOH HOWS OUR TA2A TIME?? If I know myself, I know that ta2a time is good FO REAL! And if I know you at all, I KNOW you are JUICIER THAN EVER!!! MM MM MMMM!!! IM ENJOYING THE HELL OUT OF YOU
  IN THE FUTURE ARENT I??<br><br> 
  AAAANYWAYS...I put you to sleep and told you I had to go work on my homework for the bootcamp but I wanted to speak to my Janoonti from the future. Did I fix everything I said I would?
  I know I say often how Im going to fix things. I'm going to fix this I'm going to fix that....and I know I stay true to my word. There was a time when an Ali from my own past didn't stick to his word.
  He was clumsy--"weaponised incompetence" as Jenin calls it. Won't make any excuses for myself but I grew. And I'm growing.<br><br> 
  Oh my god baby you are sooooo short-tempered it makes our relationship so spicy I wonder if you kept that or that changed. Are you looking at this thinking of how hot-headed you used to be?
  I will say one thing, though--you're growing quick right now in my present and I am noticing behavioral change. You are more forgiving and you trust my word a whole lot more in the midst of an argument.
  You don't make me feel like I won't stay true to my word. You trust me. You trust my word. The one person closest to you finally feels trusted by you. He trusts you fully and would never doubt you 
  regardless of how many mistakes you've made, but you used to doubt him a lot. You doubted me a lot Jenin. You don't know how terrible a feeling it was to always feel beneath your partner when they
  weren't perfect either. And as I type this, it's changing in front of my very eyes. You trust me Jenin. And it is the most beautiful feeling in the world. You rely on me. You BELIEVE me. I make a mistake
  and tell you I'll fix it and you TRUST me. You don't make every mistake of mine out to be a pattern anymore. We fight and make up instantly. We come to resolutions and conclusions now. We talk things out
  logically and with love. There's nothing like it ;) <br><br> 
  So tell me, where did we go for our honeymoon? Right now, Jenin and I have our minds set on Maldives. They have halal food and halal beaches where people cover up and it's so so so beautiful! Is that 
  where we went?<br><br> 
  Where all have we gone?<br><br> 
  What all have we done?<br><br> 
  What all have we ticked off our bucket list notes app?<br><br> 
  How big is our home?<br><br> 
  Do we have kids?<br><br> 
  How many kisses have we shared?<br><br> 
  How many hugs have we shared?<br><br> 
  How many goodies did I buy you?<br><br> 
  How many pieces has he taught you to play?<br><br> 
  Do I feel like home?<br><br> 
  Do you feel held?<br><br> 
  The day you come back to look at this, talk to me. Talk to the Ali next to you. Show him this letter. Show him you went back to read it. 
  You don't know how much effort he put into the things he made for you. The things he handcrafted for hundreds of hours with the thought of making you happy alone in mind.
  Answer all these questions to him. You can't talk to me I wont exist anymore when you read this in the future! But no matter how far along we've come, no matter how much we've grown...<br><br>
  The Ali that's writing to you remains forever. He's always going to be inside the Ali next to you and I promise you that. I will always be the best parts of me, and growth is judged by how much
  of the dirt I've washed off my body. The parts of Ali you love when he wrote you this letter will manifest into the whole human that is the Ali sitting next to you when you're reading this one day.<br><br>
  And one day you will read this for the last time. For the oldest Jenin reading this, we lived a good life. I apologize in advance for all the hurt I caused you, and I forgive you in advance for all
  the hurt you caused me. But I know we lived a DAMN good life. We brought each other up higher every day and we did the best with what we had, didn't we? We lived a beautiful life and I would give absolutely 
  everything to do it all over again. Go through every hardship and rough patch because I know beyond that wall is another smile of yours waiting to be felt. And at the end of the day, that's what I live for.
  And if this is your last time reading this, I hope I passed before you and that I'm waiting to spend eternity with you beyond the grave ;)<br><br>
  I love you more than you could ever know Jenin. You are my princess.
  <br><br>
  With love,
  Your husband.
  <br><br>
  June 7th, 2023
  `

  const itsBeenAWhile = `Hi baby. <br><br>
  Things are changing. `

  const eid = `Eid Mubarak, my lovely!<br><br>
  Look back at last Eid a few months ago and just look at how much both you and I have grown since then. How much closer our future
  feels.<br><br>
  I want us to use Islamic milestones like Eid as milestones to measure our growth as well. This is our 4th Eid together, and each Eid has been
  a different experience for us. We are the closest to being together forever today, and we are the farthest away today from being together forever compared
  to the rest of our lives. We will never be farther apart than we are today. And the crazy part is, it actually feels true for the first time.
  <br><br>
  We've had so many setbacks, issues, and have just had life in general get in our way of progressing. What more could there possibly be?
  Does it not feel true today? Is that doubt not going away? <br><br>
  As much as we both say "this is it, you're the one for me," we're not there yet. Atleast, we WEREN'T. But you do feel it now, don't you? 
  The air feels different. You're not scary anymore. The difficult conversations come and go easy. There are still hard conversations and
  you're still a rude zift occasionally and overreact but I do too.<br><br>
  The biggest difference is that when things seem bad or scary or you overreact or get mean, it's a SURPRISE. I don't expect it anymore and 
  I'm certain you don't either.<br><br>
  Let's celebrate today, on Eid, how far we've come from Eid last year in terms of our deen. Matter of fact, how far we've come since last Eid.
  We've made so many changes recently in the past few weeks, including bringing Quran back into our daily lives. You fall asleep so fast
  to me reading Quran for you. Before this, you wouldn't let anything get in the way of our conversations as you passed out in your bed.
  But you now let Quran put you to sleep. What better growth could there be?<br><br>
  Now no Eid is complete without an Eidi, so I decided to something a liiiittle different this time: <br><br>
  Number: 6302263986511084 <br>
  Pin: 40272059 <br><br>
  Enjoy baby! Eid Mubarak!
  <br><br>
  Love,
  Your husband. <br><br>
  June 27th, 2023`

  const reflection = `The past speaks of the future. 
  <br><br>
  I'm sorry I haven't written to you in a while. It's getting rough out here and I'm on the front lines. I haven't had a chance to rest.
  But throughout it all, your memory is an everlasting hug. There is no greater comfort.
  Listening to Joe Hisaishi's "One Summer's Day" made me think of Steins Gate's "Believe Me". It reminded me of very uncertain times.
  At our worst and our lowest, listening to this piece reminded me of the few good times we had prior. Of a time that proved to me that it will be 
  worth it. How couldn't you be?<br><br>
  What a ways we've come.<br><br>
  The past is truly unrecognizable and requires great amounts of manpower and elbow grease just to lift the soot off of its memory.
  Time heals all wounds and look where it brought us. Everything is coming to fruition. There is no greater peace than the promise of the future.
  There is no greater promise of the future than of ours becoming one. There is no greater place to be than the haven in a storm I found in you.
  As the world wails and cries and crashes and burns, you grow to be a bigger heaven every day. You are my safe space.<br><br>
  It took me my lifetime to realize that you, having known me only a fraction of the time my family has, are the only soul that sees my flaws as
  a testament to my journey. They are things I need to change but my hurt and my burden and my lacking are all just parts of me that fade away as your waves wash over me
  and cleanse me every moment.<br><br>
  The rest of our lives is a symphony we are conducting together. We are standing close to the precipice of our future and it isn't
  fear or uncertainty that fills me. Rather, it's anticipation, hope, and undying excitement. <br><br>
  We just work. Like the sea and the horizon, wine and cheese, or peanut butter and jelly.
  The occasional whiffs of your scent in the air, the soft echo of your laughter in my mind, they become my sancruary amidst the turmoil of living.
  <br><br>
  Until God gifted me with your presence, living was a tragedy. My days stale and full of myself, the person I hate the most. <br><br>
  You saved me from burying myself and I will be forever grateful. You saved me from a life of the words I hate more than I hate myself--I, my, and mine--for nothing
  is owned but is owned by you, too. All of me is yours and all of you is mine. <br><br>
  This is the life I want to live. A life envied by everyone around the world, for what a soul craves and fights until the day of judgement to 
  hold in the afterlife, I am granted today. <br><br>
  I will chase you to the ends of the earth, burning every single thing in my path. I have devoted our entire life to you.
  The happier you are, the happier am I. I would be blessed to be even just a little figure on your vanity, collecting dust by the years, if
  it meant I was allowed into your space. I would spend my days breathing in just the smallest droplets of life you give off into the air so generously.
  It is all I need to survive, and yet, would last me 3 human lifetimes. I would have the privilege of looking at you if you ever turned me to face you.
  You would have no idea I existed and would continue on with your life with me in your possession. And the greatest realization I have ever come to is 
  that I truly just desire to be something in your possession. I just want to be needed by you. That's all I need and it is everything I get today.<br><br>

  Yet, how fortunate am I that I am not a mere trinket on your shelf but flesh and blood, a living testament to your love.
  I get to laugh with you. I get to talk to you. I get to know what runs through your mind. What makes you happy.
  What makes you sad. What makes you annoyed. What brings you joy. What keeps you up at night and what puts you to sleep.
  I get to be the person for you that you are for me. Even if I can only do a fraction of what you do for me, I know that it would mean the world to you. 
  Because that tiny fraction, multiplied by ten, is the overwhelming love I receive from you, a love that sets my soul ablaze, leaves me yearning for more. 
  Your love kindles a fire in my soul, a fire that warms me in the cold light of day and cools in the dying embers of dusk.  <br><br>
  Our story is just beginning. <br><br>
  It is the echo of an age-old promise, <br><br>
  The whisper of a future yet unwritten, <br><br>
  A future we will read together, one page at a time.<br><br>
  And you, my love, are the ink that will etch our tale into the annals of time. <br><br>
  And what a glorious tale it promises to be. <br><br>
  As I face the uncertainties of tomorrow, I am fortified by the memory of your love. I know that whatever the future holds, you are with me, and that alone is enough to face whatever comes our way. 
  For in the dance of life, in the symphony of existence, there is no partner I'd rather have than you. So here's to us, to our journey, to the story we have yet to write.<br><br>
  Until then, remember that I carry you in my heart, in every beat, in every breath. You are my past, my present, and my future. You are my everything.<br><br>

  And so, I write to you, my beatiful arab princess, not to just express the depth of my feelings, but to make a promise. 
  A promise of more. More love, more laughter, more understanding, more of us. As the sun promises to rise each day, as the stars promise to shine each night, I promise you more.<br><br>
  More of shared mornings and quiet evenings, more shared dreams and conquered fears. 
  More shared successes and learned failures. More shared silence and meaningful conversations. More moments of joy, moments of sorrow, moments of triumph, and moments of defeat.<br><br> 
  More of everything that makes us, us.<br><br>

  Because love, real love, isn't just about the happy moments. As you once told me, we can never, on any given day, give each other equal amounts of effort. True love requires
  compromise. I fill in the gaps as you do mine. You are ever gentle with my soul.<br><br>

  Because love, real love, is about growing together, learning together, and building a life that's intertwined so seamlessly that it becomes impossible to tell where one ends and the other begins.<br><br>

  And one day I will wake up and read this with you. And we will look back on this as we now look back on a past long forgotten.<br><br>
  To see you in the morning light as the first orange hazes of sun hit your peach fuzz is to witness the dawn of my day and life anew.
  And as I feel the divinity of your warmth as the day yawns and stretches,
  and as the world grows quiet and the hustle of life slows down, 
  and as the sun dips below the horizon and a diminuendo of warmth envelopes us,
  and as the symphony of orange and purple hues gradually soften to a quiet, intimate silence, 
  I find solace in our shared silence. Every day we grow closer to death, I am happier. They are filled with a love so profound that it transcends the barriers of spoken language. 
  And in those moments, I realize that I do not just exist alongside you, I exist because of you.
  And in those moments I find an understanding so deep that words fail to do justice. Alas, your eyes are ever the loudest violin in the room.<br><br>
  
  With love, <br>
  Your husband, soon.
  <br><br>
  <br><br>
  I guess this is finally a surprise I haven't spoiled. My first work of art dedicated to you. Written over the course of two months entailing countless reads and re-reads of poetry I haven't
  been able to keep track of. A previously unfinished work with progress fueled, yet again, by your disdain of the illusion of my lack of effort. But I promise you, an illusion is all it will ever be.`


const letters = [
  {
    name: `May 26th`,
    string: may26th
  },
  {
    name: `May 27th`,
    string: may27th
  },
  {
    name: `May 28th`,
    string: may28th
  },
  {
    name: `May 29th`,
    string: may29th
  },
  {
    name: `May 30th`,
    string: may30th
  },
  {
    name: `May 31st`,
    string: may31st
  },
  {
    name: `A letter to the future.`,
    string: aLetterToTheFuture
  },
  {
    name: `It's been a while`,
    string: itsBeenAWhile
  },
  {
    name: `Eid Mubarak`,
    string: eid
  },
  {
    name: 'The Loudest Violin In The Room.',
    string: reflection
  
  },
  {
    name: 'Surprise!',
    string: ''
  }
]

  const CrosswordSection = () => {

    const audio = new Audio('src/assets/mia.mp3'); 

    const playAudio = () => {
      audio.play();
    };



    const answersOrder = [15, 14, 13, 4, 2, 6, 9, 5, 7];

    const initialAnswers = {
      15: 'valorant',
      14: 'always',
      13: 'lalaland',
      4: 'ethereal',
      2: 'ninitime',
      6: 'triplecheeseburger',
      9: 'indian',
      5: 'never',
      7: 'everythin',
    };

    const [answers, setAnswers] = useState(initialAnswers);

    const correctAnswers = {
      15: 'valorant',
      14: 'always',
      13: 'lalaland',
      4: 'ethereal',
      2: 'ninitime',
      6: 'triplecheeseburger',
      9: 'indian',
      5: 'never',
      7: 'everything',
    };

    // Check if all answers are correct
    const allAnswersCorrect = Object.keys(answers).every(
      (number) => answers[number].toLowerCase() === correctAnswers[number]
    );

    if (allAnswersCorrect) {
      playAudio();
    }

    return (
      <div className="crossword-section">
        <div className="crossword-grid">
        <div className={`will-you-be-my ${allAnswersCorrect ? 'fade-in' : ''}`} style={{fontSize:'25px', color:'white', marginBottom: '20px'}}>
          Will you be my
        </div>
          {/* Add crossword input fields here in the specified order */}
          {answersOrder.map((number) => (
            <div key={number} style={{marginBottom: '20px'}}>
              <span>{number}. </span>
              <input
                type="text"
                value={answers[number]}
                onChange={(e) => {
                  const updatedAnswers = { ...answers };
                  updatedAnswers[number] = e.target.value;
                  setAnswers(updatedAnswers);
                }}
                style={{ backgroundColor: 'white', borderRadius: '5px', color:'black' }}
              />
            </div>
          ))}
        </div>
        <div className={`will-you-be-my ${allAnswersCorrect ? 'fade-in' : ''}`} style={{fontSize:'25px', color:'white'}}>
          ?
        </div>


      </div>
    );
  };

  const [selectedPost, setPost] = useState(letters[letters.length-1].string)

  return (
    <>
      <div className='top py-5 mt-5 px-5' style={{ backgroundColor: `hotpink`, borderRadius: `60px`, fontSize: `20px` }}>
        <h1 className='text-light'>Dear Janoonti,</h1>
        <div className='text-light' dangerouslySetInnerHTML={{ __html: selectedPost }} />
        {selectedPost === '' && <CrosswordSection />}
      </div>
      <div className='bottom py-5 mt-5' style={{ display: `flex`, flexDirection: `column`, gap: `1rem`, alignItems: `center`, backgroundColor: `lightblue`, borderRadius: `60px` }}>
        {letters.reverse().map((letter, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button onClick={() => setPost(letter.string)} variant='light' style={{ maxWidth: `20rem` }} key={index}>
              {letter.name}
            </Button>
          </div>
        ))}
      </div>
      
    </>
  );

}

export default App
