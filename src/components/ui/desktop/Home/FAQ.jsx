import { useState } from "react";
import { settings } from "../../../../api";

const FAQ = () => {
  const [tabs, setTabs] = useState(0);
  const handleOpenTabs = (tab) => {
    if (tabs === tab) {
      setTabs(0);
    } else {
      setTabs(tab);
    }
  };
  return (
    <>
      <div className="px-[6px]">
        <article className="">
          <div
            onClick={() => handleOpenTabs(1)}
            className="w-full bg-bg_Quaternary rounded-md flex items-center justify-center"
          >
            <h1 className="text-md p-[12px] font-normal w-full bg-bg_Quaternary flex items-center justify-between rounded-sm cursor-pointer">
              <span className="font-lato text-[14px]">
                {settings.site_name} - Best Online Betting App in India
              </span>
              <span
                className={`flex items-center ml-[8px] autoAnimate ${
                  tabs === 1 ? "rotate-180" : "-rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  viewBox="0 0 512 512"
                  height="12"
                  width="12"
                  fill="var(--color-ternary)"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </span>
            </h1>
          </div>
          <div
            className={`transition-all duration-300 w-full bg-bg_Quaternary rounded-sm flex flex-col overflow-hidden ${
              tabs === 1 ? "" : "max-h-0 opacity-0"
            }`}
            style={{ visibility: tabs === 1 ? "visible" : "hidden" }}
          >
            <div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  Guide to Online Betting in India
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Welcome to {settings.site_name}, where we hand you the best of
                  everything you want to know about betting! You are in the
                  right place to uncover the best betting apps and sites in
                  India. We know that it can be very hard to find your way
                  around the world of online betting, especially since there are
                  so many choices available. Because of this, we put together
                  this detailed guide to help you make smart choices and make
                  your betting experience better overall. There are a lot of
                  different betting options at {settings.site_name}, so no
                  matter how experienced you are or how new you are to betting,
                  you can find something that suits you. We have everything you
                  could want, from the exciting Indian card games to the popular
                  sports from around the world, like tennis and football. This
                  guide aims to teach you everything you need to know about the
                  best online betting apps in India and gambling online in
                  India. For instance, you will learn how to choose the right
                  site, as well as the differing kinds of bets and gambling
                  responsibly. Thats over with. Now lets dive in and learn more
                  about the exciting world of online betting!
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  How to Learn About Online Betting in India
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  India has been at the frontline in the massive paradigm shift
                  of people making bets on sports towards gaming online. More
                  people have turned their wagering to be done online due to the
                  common use of computers and also because the insight is easy
                  to get to. Why, then, do they use it, and in what way does
                  using the phrase online betting function? Online betting: a
                  term that is equivalent to wagering or gambling when done
                  through the internet-serviced websites. These events just
                  might be anything, including sports games, gambling games or
                  card games, and infinite game types. The best online betting
                  apps in India allow us to do this kind of activity on a vast
                  array of games so that one can easily chill and do it from the
                  comfort of their homes or even while they are traveling. Here
                  at {settings.site_name}, we take pride in being one of the
                  biggest known betting sites in India. The tool that we provide
                  has been done so with acute gamblers in mind; thus, it has
                  been tailored in an easy way to facilitate their needs. Safe,
                  fun, and fair atmosphere—our primary goal is to process so
                  that whoever comes into our site can actually bet in such
                  conditions.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  Optional bets that are often made on {settings.site_name}
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  There are a lot of different betting options at{" "}
                  {settings.site_name} so that they can cater to a wide range of
                  tastes and interests. Most of the time, the following groups
                  are used:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  a) Indian Card Games:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  1.Teen Patti
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  2.Andar Bahar
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  3.Rummy
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  b) Sports Betting:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  1.Cricket
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  2.Football
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  3.Tennis
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  4.Basketball
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  c) Horse Racing and Greyhound Racing
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  d) Casino Games:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  1.Slots
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  2.Roulette
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  3.Blackjack
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  4.Baccarat
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  e) Virtual Sports
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  In each of these groups, you can find a wide range of betting
                  options and fun things to do. You can find anything you want
                  at {settings.site_name}, whether you like traditional Indian
                  games or sports from around the world.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  The best way to choose the best online betting apps in India
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  There are so many gaming apps out there that it can be hard to
                  pick the best one. Various factors must be put into
                  perspective as one is looking for the best online betting apps
                  in India, including the following
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  a) License and being under the control of a trustworthy group
                  of people are a couple features to be on the lookout for in
                  the application. For you as a player, this protects your
                  interests and makes sure the game is fair.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  b) Look for an app that has an easy-to-use design that is also
                  simple to get around in, especially for people who are just
                  sarting out.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  c) There are many ways in which betting through your mobile
                  phone can be facilitated for sports, games, or a variety of
                  things the current best apps allow users to stake on.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  d) Payment Options: Verify if the app provides secure and
                  easy-to-use payment instruments that would be acceptable in
                  India.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  e) Help for Customers Customer service that is done right is
                  very important. Find apps that offer help 24 hours a day, 7
                  days a week in a number of different ways.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  f) Incentives and promotions: Many of the top betting sites in
                  india offer incentives and promotions that make people want to
                  sign up or keep they already have.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  g) For security reasons, you should check that the app uses
                  strong encryption to keep your personal and banking data safe.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Overall, {settings.site_name} is one of the top betting sites
                  in india because it meets all of these criteria. When we made
                  our app, we thought about the Indian user and made sure it
                  would work the same on all devices.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  Starting to Bet Online for the First Time
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  If youve never bet online before, dont worry about it! The
                  beginning is a lot easier than you might think at first. With
                  the help of this step-by-step guide, you can start betting:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Step 1: First of all, make sure to pick a site you can trust.
                  You need to find a gaming website or app. You can use, for
                  instance, a top betting sites in india rated among the best,
                  {settings.site_name}. You may use the site regardless of being
                  new to gambling or an expert.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Step 2: Register yourself. Just by logging in with an ID at
                  {settings.site_name} or its Indian gaming app, you will soon
                  create an account, guided by simple steps.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Step 3: Authenticate the authenticity of your account. Our
                  website requires users to verify their accounts in order to
                  maintain platform security and authenticity in relation to the
                  rule of law. As a general rule, this requires some basic
                  personal details and proof of identification.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Step 4: Deposit Now that your account has been verified, you
                  can make your first payment—{settings.site_name} On checkout,{" "}
                  {settings.site_name}
                  offers Indian people a number of safe payment options made
                  just for the people in this country.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Step 5: Betting Options Take some time to explore the
                  different kinds of betting available. Directions on how the
                  software works and what the program accepts for wagers.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Step 6: Place your first bet. Start off small simply to
                  acclimatize yourself to the process. Be wise and know how much
                  you bet; stay within your budget.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Step 7: The seventh step is to withdraw your wins. With any
                  luck, you will win, and it is very simple at our casino to
                  withdraw staff with our secure modes of transfer.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  Learning about the different kinds of bets available
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  To get the most out of your betting, you need to have a good
                  idea of the different kinds of bets that are out there. Here
                  is a list of common types of bets you can find on{" "}
                  {settings.site_name}:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  1: Single Bets: A simple bet on just one result of an event is
                  called a single option.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  2: Accumulator Bets: When you mix several choices into one
                  bet, the odds of winning are higher. These bets are called
                  accumulator bets.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  3: System Bets: These are multiple accumulator bets that can
                  be made from a list of choices in a number of different ways.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  4: Live betting: It is the act of putting money on events as
                  they are happening right now.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  5: Handicap Betting: If you want to level the playing field,
                  you can use handicap betting, which means giving one person or
                  team a virtual edge or loss.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  6: Over/Under Betting: The act of guessing whether a certain
                  measure will be above or below a certain number is known as
                  over/under betting.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  7: Outright Betting: When you bet on the person who will win a
                  sport or game, this is called outright betting.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Learn more about these different types of bets. This will help
                  you make better decisions and may even increase your chances
                  of winning.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  The Rise of Live Betting on {settings.site_name}
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Live betting, otherwise referred to as in-play betting, has
                  developed into a new frontier in terms of the way people are
                  wagering online today, and {settings.site_name} is right at
                  the forefront. With this, you can bet on events as they
                  happen, hence allowing one to make betting more exciting and
                  strategic.You can do live bets on many varieties of sports and
                  events on {settings.site_name}. From watching a thrilling
                  cricket match right in the stadium, sitting at the stands, to
                  an intense football game or a nail-biting play of tennis,
                  these are bets that can be made during the match. Its a
                  thrilling form of betting with loads of benefits associated
                  with it, such as:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  1: More Informed Decisions: Should you be able to be there
                  live to witness the event, you possess better judgment
                  regarding how the game is going, how the players are faring,
                  and other things that happen in real time.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  2: More varied betting options: Live betting affords one many
                  varied betting options barely existent before the event. You
                  can bet on who scores the next goal, how many corners will be
                  taken in the next 10 minutes, or even who is going to win a
                  certain tennis set.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  3: Hedging Opportunities: Live betting enables you to hedge
                  the chances so that the losses can be minimized or even
                  realized with the least losses possible when the set bet has
                  not turned out as desired, such that it had already been made
                  before the game.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  4: Increased Engagement: Live betting makes watching sports
                  highly thrilling since one is making decisions and placing
                  bets as the action unfolds.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  5: Opportunity for better odds: Real-time betting will give
                  you an opportunity to have better odds since usually the odds
                  from the bookies are dynamically changed, depending on what is
                  happening.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  We have made much investment in up-to-date technology at
                  {settings.site_name} to ensure that our live betting is fast,
                  secure, and simple. With our live odds changes and
                  user-friendly placement of bets, you will never miss a great
                  opportunity in betting.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  How to Play Gambling Games Advisably
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  We support responsible gambling in the {settings.site_name}{" "}
                  community. Here are some tips that will help you keep your
                  betting fun and risk-free:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  1: Make a budget. Figure out how much money you can spend on
                  betting and stick to that amount.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  2: Be aware of your limits at all times and never bet more
                  money than you can afford to lose.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  3:If youve lost money, dont try to get it back by betting
                  more. People who do this are said to chase losses.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  4:Keep up with the news: Do your research and be sure you
                  really understand what youre betting on.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  5:Take Breaks: Regular breaks may help you keep things in
                  perspective and keep you from spending an excessive amount.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  6:Get Help from a Professional if You Need It: If you think
                  that your gaming is getting out of hand, dont be afraid to get
                  help from a professional.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  Why using {settings.site_name} is a good idea.
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Once you understand the basics of online betting, lets talk
                  about why {settings.site_name} is thought to be one of the
                  best apps for online betting in your country:
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  1:An Easy-to-use Interface: Our platform is designed to be
                  simple to use, so both new and experienced players can easily
                  find their way around it.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  2:We offer many different ways to bet, all year long. These
                  include betting on everything from Indian card games to
                  popular sports from around the world.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  3:Its possible for us to give some of the best odds in the
                  business, which means that you could get the biggest return
                  possible.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  4:Safe and Fast Transactions: Nothing is more important to us
                  than the safety of your money. We share ways of safe payment
                  for you, quickly depositing or even withdrawing your money,
                  and give you the option of doing the same.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  5:Our customer service runs 24/7, where our ever-dedicated
                  support team is always at your disposal to take up various
                  questions and address any issues that may arise at your
                  convenience.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  6:Promotions still live: A host of prizes and special offers
                  are available to be won to boost the overall betting
                  experience.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  7:Fully Compatible with Mobile Devices: india betting app
                  download can be done for both Android and iOS phones and
                  tablets, so you can bet while youre on the go.
                </p>
              </div>
              <div className="mb-[8px] p-[12px]">
                <h2 className="bg-bg_Quaternary font-bold font-lato text-[14px]">
                  Conclusion
                </h2>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Online betting can really be fun, but it could easily turn
                  lucrative as well with the right thinking. Here at Unicon 365,
                  we pledge to provide our users with a safe, honest, and
                  exciting arena. We stand to be one of the safest betting sites
                  in India. So, be it American-style betting games or any sports
                  from Asia and Europe, or classic Indian card games, there is
                  something for everyone.
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Finally, remember to play responsibly and stay informed on a
                  site you can trust. So, join {settings.site_name} right now
                  and not only get to play on one of the best online betting
                  apps in India, but also be part of a large community of
                  players who are invested in the game in just the manner that
                  you are..
                </p>
                <p className="bg-bg_Quaternary font-normal font-lato text-[12px]">
                  Then how come we wait? For beginning your journey on how to
                  have the best betting experience with us, move over to our
                  site or download the app for betting from {settings.site_name}{" "}
                  India right now! Good luck, and may the odds always be in your
                  favor!
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="py-1 px-[6px]">
        <article className="">
          <div
            onClick={() => handleOpenTabs(2)}
            className="w-full bg-bg_Quaternary rounded-md flex items-center justify-center text-red"
          >
            <h2 className="text-md p-[12px] font-lato text-[14px] font-normal w-full bg-bg_Quaternary flex items-center justify-between rounded-sm">
              FAQs About Betting Online in India
              <span
                className={`flex items-center ml-[8px] autoAnimate ${
                  tabs === 2 ? "rotate-180" : "-rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  viewBox="0 0 512 512"
                  height="12"
                  width="12"
                  fill="var(--color-ternary)"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </span>
            </h2>
          </div>
          <div
            className={`transition-all duration-300 w-full bg-bg_Quaternary rounded-sm flex flex-col overflow-hidden ${
              tabs === 2 ? "" : "max-h-0 opacity-0"
            }`}
            style={{ visibility: tabs === 2 ? "visible" : "hidden" }}
          >
            <div className="mb-[8px] p-[12px]">
              <h3 className="bg-bg_Quaternary font-bold font-lato text-[12px]">
                Is it okay to bet online in India?
              </h3>
              <div className="bg-bg_Quaternary font-normal font-lato text-[12px] list-decimal list-inside">
                <div>
                  In India, its not always clear if its allowed to bet on sports
                  online. It depends on the state. Some kinds of betting are
                  regulated, while others are seen as being on the edge of the
                  law. Understanding and following the rules that apply to the
                  area is very important.
                </div>
              </div>
            </div>
            <div className="mb-[8px] p-[12px]">
              <h3 className="bg-bg_Quaternary font-bold font-lato text-[12px]">
                What do I need to do to get the {settings.site_name} betting
                app?
              </h3>
              <div className="bg-bg_Quaternary font-normal font-lato text-[12px] list-decimal list-inside">
                <div>
                  You can get our gaming app that is especially made for India
                  right from our website. By going to {settings.site_name}s home
                  page and following the instructions given, you can easily
                  India betting app download and set up the app.
                </div>
              </div>
            </div>
            <div className="mb-[8px] p-[12px]">
              <h3 className="bg-bg_Quaternary font-bold font-lato text-[12px]">
                What payment methods are available on {settings.site_name}?
              </h3>
              <div className="bg-bg_Quaternary font-normal font-lato text-[12px] list-decimal list-inside">
                <div>
                  The website {settings.site_name} lets you pay in a number of
                  different ways. Indian users can pay for things in a number of
                  different ways, such as the Unified Payments Interface (UPI),
                  net banking, credit and debit cards, and well-known e-wallets.
                </div>
              </div>
            </div>
            <div className="mb-[8px] p-[12px]">
              <h3 className="bg-bg_Quaternary font-bold font-lato text-[12px]">
                How long does it take for {settings.site_name} to handle
                withdrawals?
              </h3>
              <div className="bg-bg_Quaternary font-normal font-lato text-[12px] list-decimal list-inside">
                <div>
                  We try to process all withdrawals as quickly as possible,
                  usually between 24 and 48 hours. However, the time it takes to
                  get your money can change based on the method you choose.
                </div>
              </div>
            </div>
            <div className="mb-[8px] p-[12px]">
              <h3 className="bg-bg_Quaternary font-bold font-lato text-[12px]">
                Will my personal information be safe if I store it on{" "}
                {settings.site_name}?
              </h3>
              <div className="bg-bg_Quaternary font-normal font-lato text-[12px] list-decimal list-inside">
                <div>
                  Without a doubt. We use the most advanced encryption
                  technologies on the market to keep your personal and business
                  information safe.
                </div>
              </div>
            </div>
            <div className="mb-[8px] p-[12px]">
              <h3 className="bg-bg_Quaternary font-bold font-lato text-[12px]">
                Can I set limits on how much I can bet on my account?
              </h3>
              <div className="bg-bg_Quaternary font-normal font-lato text-[12px] list-decimal list-inside">
                <div>
                  The answer is yes. As part of our pledge to responsible
                  gaming, {settings.site_name} lets users limit how much they
                  can deposit, bet, and lose.
                </div>
              </div>
            </div>
            <div className="mb-[8px] p-[12px]">
              <h3 className="bg-bg_Quaternary font-bold font-lato text-[12px]">
                Do you think you might have a problem with gambling? If so, what
                should you do?
              </h3>
              <div className="bg-bg_Quaternary font-normal font-lato text-[12px] list-decimal list-inside">
                <div>
                  If you are worried about your gaming habits, you should get in
                  touch with groups that help people who are addicted to
                  gambling. You can also contact our customer service team if
                  you need help with the responsible gambling choices on our
                  platform.
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default FAQ;
