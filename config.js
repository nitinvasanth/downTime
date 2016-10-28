/*****************************************************
	
	
   	@Author			Avanzare
	@Website		www.avanzare.co
	@Last Update	10:13 PM Friday, December 18, 2015

	TABLE CONTENTS
	---------------------------
	 1. Read Me
	 2. Main Config
	 3. Additional Config Background
	 __ 3.1. Image Background / Youtube Fallback
	 __ 3.2. Slider / Kenburns Background
	 __ 3.3. Youtube Background
	 __ 3.4. Solid Color Background
	 
	 4. Additional Config Overlay
		
		
 *****************************************************/
  
  
/**	1. Read Me
*****************************************************/   



  	 /*
	 
	   CONFIG - OPTION STRUCTURE:
	  -------------------------- 
	  
	  //OPTION NAME - [OPTION VALUES]
	  
	  // OPTION VALUES - OPTION VALUE EXPLAINED
	  // OPTION VALUES - OPTION VALUE EXPLAINED
	  // OPTION VALUES - OPTION VALUE EXPLAINED
	  
	  OPTION VARIABLE: CURRENT OPTION VALUE 
	  
	  */
	  
	  
	  
	  // !!! IMPORTANT - DO NOT REMOVE QUOTATION MARKS WHEN GIVEN("") !!!
	  // !!! SAVE THE FILE AND REFRESH YOUR BROWSER TO SEE THE CHANGES !!!
  


/**	2. MAIN CONFIG
*****************************************************/
  
  
  	 
	var CONFIG = {
		
		
		
		//BACKGROUND OPTIONS - ["image":"slider":"youtube":"color":"dots"]
		
		// "image" = IMAGE BACKGROUND
		// "slider" = SLIDER BACKGROUND
		// "youtube" = YOUTUBE VIDEO BACKGORUND
		// "color" = SOLID COLOR BACKGROUND
		// "kenburns" = KEN BURNS SLIDER BACKGROUND
		
		background: "youtube",
		
		
		
		//OVERLAY OPTIONS -  [0:1:2:3]
		
		// 0 = ALL OVERLAYS ACTIVE
		// 1 = ONLY SUBSCRIBE OVERLAY ACTIVE
		// 2 = ONLY CONTACT OVERLAY ACTIVE
		// 3 = NO OVERLAYS ACTIVE
		
		overlay: 0,
		
		
		
		// SKINS OPTION  ["black":"white"]
		
		// "black" = BLACK COLOR SCHEME
		// "white" = WHITE COLOR SCHEME
		
		skin : "black",
		
		
		
		//CANVAS PARTICLE EFFECT - [true:false]
		
		// true = CANVAS PARTICLE ON
		// false = CANVAS PARTICLE OFF
		
		canvasEffect: true,
		
		
		 
		//PARALLAX HOVER EFFECT - [true:false]
		
		// true = PARALLAX HOVER EFFECT ON
		// false = PARALLAX HOVER EFFECT OFF
		
		parallax: true
		
		
		
	};
	
	
	
	// CONFIG VARIABLES 
	var youtubeBG,solidBG,imageBG,sliderBG,youtubeBGstart,youtubeBGend,overlayAnimation,overlayContentAnimation,screenTime,fadeDuration,sliderTransition,kenburnsEffect,bgOverlayOpacity,bgPatternOpacity,bgOverlayMode,bgOverlayColor,subscribeMail,contactMail;
   
  
  
/**	3. ADDITIONAL CONFIG BACKGROUND 
*****************************************************/ 
  
  
  
    // BACKGROUND INTRO OVERLAY MODE  ( "solid":"gradient" )
	// NOT WORKING WITH BACKGROUND OPTION "color" !!!
	
	// "solid" = Single Solid Color
	// "gradient" = Animated Color Gradient 
	
	bgOverlayMode = "solid";
	
	
	
	// COLOR BACKGROUND OVERLAY ( Intro / use for "Single Solid Color" Mode )
	bgOverlayColor = "rgb(0,0,0)";
	//bgOverlayColor = "rgb(255,255,255)";
	
	
	// OPACITY BACKGROUND OVERLAY ( Intro )
	bgOverlayOpacity = 0.5;
	
	
	
	// OPACITY BACKGROUND PATTERN ( Intro )
	bgPatternOpacity = 0.5;
	
	
	
	/**	3.1. IMAGE BACKGROUND / YOUTUBE FALLBACK
	*****************************************************/ 
	
	
	
		// ENTER YOUR IMAGE PATH/URL
		imageBG = "assets/img/1.jpg";
		
		
	
	/**	3.2. SLIDER BACKGROUND / KENBURNS
	*****************************************************/ 
	
	
	
		// ENTER YOUR IMAGES PATHS / URLS
		sliderBG = [{src:'assets/img/1.jpg'},{src: 'assets/img/2.jpg'},{src: 'assets/img/3.jpg'}];
		
		
		
		// IMAGE/TEXT FADE DURATION IN MS ( 1000 ms = 1 sec )
		fadeDuration = 800;
		
		
		
		// IMAGE/TEXT SCREEN TIME IN MS ( 1000 ms = 1 sec )
		screenTime = 6000;
		
		
		
		//TRANSITION OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]
		
		// fade = FADE TRANSITION
		// fade2 = FADE 2 TRANSITION
		
		// slideLeft = SLIDE LEFT TRANSITION
		// slideLeft2 = SLIDE LEFT 2 TRANSITION
		// slideRight = SLIDE RIGHT TRANSITION
		// slideRight2 = SLIDE RIGHT 2 TRANSITION
		// slideUp = SLIDE UP TRANSITION
		// slideUp2 = SLIDE UP 2 TRANSITION
		// slideDown = SLIDE DOWN TRANSITION
		// slideDown2 = SLIDE DOWN 2 TRANSITION
		
		// zoomIn = ZOOM IN TRANSITION
		// zoomIn2 = ZOOM IN 2 TRANSITION
		// zoomOut = ZOOM OUT TRANSITION
		// zoomOut2 = ZOOM OUT 2 TRANSITION
		
		// swirlLeft = SWIRL LEFT TRANSITION
		// swirlLeft2 = SWIRL LEFT 2 TRANSITION
		// swirlRight = SWIRL RIGHT TRANSITION
		// swirlRight2 = SWIRL RIGHT 2 TRANSITION
		
		// burn = BURN TRANSITION
		// burn2 = BURN 2 TRANSITION
		// blur = BLUR TRANSITION
		// blur2 = BLUR 2 TRANSITION
		// flash = FLASH TRANSITION
		// flash2 = FLASH 2 TRANSITION
		
		sliderTransition = "fade";
		
		
		
		//KENBURNS OPTIONS - [ http://vegas.jaysalvat.com/documentation/transitions/ ]
		
		// kenburns = BASIC KENBURNS EFFECT
		// kenburnsUp = KENBURNS UP EFFECT
		// kenburnsDown = KENBURNS DOWN EFFECT
		// kenburnsRight = KENBURNS RIGHT EFFECT
		// kenburnsLeft = KENBURNS LEFT EFFECT
		// kenburnsUpLeft = KENBURNS UP LEFT EFFECT
		// kenburnsUpRight = KENBURNS UP RIGHT EFFECT
		// kenburnsDownRight = KENBURNS DOWN RIGHT EFFECT
		// kenburnsDownLeft = KENBURNS DOWN LEFT EFFECT
		// random = RANDOM KENBURNS EFFECT
		
		kenburnsEffect = "random";
		
	
	
	/**	3.3. YOUTUBE VIDEO BACKGROUND
	*****************************************************/ 
	
	
	
		// ENTER YOUR YOUTUBE VIDEO ID/URL
		youtubeBG = "https://www.youtube.com/watch?v=BKP_dvCMC1A";
		
		
		
		// ENTER START POINT IN SECONDS ( 0 = will disable option)
		youtubeBGstart = 0;
		
		
		
		// ENTER STOP POINT IN SECONDS ( 0 = will disable option)
		youtubeBGend = 0;
	
	
	
	/**	3.4. SOLID COLOR BACKGROUND
	*****************************************************/ 
	
	
	
		// ENTER YOUR SOLID COLOR IN RGB OR HEX
		solidBG = "rgb(0, 114, 255)";


  
/**	4. ADDITIONAL CONFIG OVERLAY
*****************************************************/
	
	
	
	// OVERLAY ANIMATION  ["fade":"slide"]
	
	// "fade" = FADE ANIMATION
	// "slide" = SLIDE FROM BOTTOM ANIMATION
	
	overlayAnimation = "fade";
	
	
	
	// OVERLAY CONTENT ANIMATION  ["fade":"slide"]
	
	// "fade" = FADE ANIMATION
	// "slide" = SLIDE FROM BOTTOM ANIMATION
	
	overlayContentAnimation = "slide";