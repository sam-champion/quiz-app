import React from "react";

type LogoProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};
const Logo: React.FC<LogoProps> = ({ className = "", strokeWidth = 12 }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="150 190 720 620"
      className={`w-full h-full ${className}`}
      strokeWidth={`${strokeWidth}`}
    >
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M825.597595,593.566162 
		  C813.211670,608.633911 797.868958,617.767883 778.701294,620.129333 
		  C772.997620,620.832031 772.696045,621.357971 773.493408,627.503418 
		  C775.136292,640.166016 774.717773,652.688477 771.442627,665.124634 
		  C762.693909,698.344604 735.617920,721.647034 701.473816,725.496643 
		  C691.476990,726.623840 681.505493,726.172791 671.526245,726.068909 
		  C667.346130,726.025391 666.009338,727.523926 665.989258,731.566711 
		  C665.900635,749.382996 665.451538,767.198303 665.459290,785.013794 
		  C665.461365,789.809814 663.742859,790.844543 659.135071,791.417114 
		  C645.265869,793.140564 635.531982,788.374634 625.743286,777.928284 
		  C597.729675,748.032349 568.317017,719.443726 540.126892,689.686707 
		  C537.001953,686.388062 533.692017,685.054260 529.162292,685.130066 
		  C514.333740,685.378174 499.498138,685.160828 484.666870,685.296997 
		  C450.001953,685.615173 421.694153,671.822754 398.586578,646.572876 
		  C385.641846,632.428040 375.279022,616.629211 368.805756,598.449280 
		  C368.537445,597.695801 368.115692,596.997009 367.623749,595.979797 
		  C362.518982,598.305359 358.761841,602.118103 354.653290,605.359680 
		  C331.013733,624.011047 299.874603,622.704651 278.067505,601.998718 
		  C275.168518,599.246155 272.014404,596.653687 269.628510,593.495911 
		  C266.389923,589.209717 262.125549,587.870361 257.162231,587.380127 
		  C218.800766,583.590637 187.138733,553.353821 181.667343,515.299377 
		  C179.732285,501.840790 180.392578,488.413757 182.308212,475.004974 
		  C182.801453,471.552582 182.863815,468.031921 183.469711,464.603729 
		  C184.544998,458.519623 187.585251,455.983429 194.170258,455.744293 
		  C199.662827,455.544861 205.167923,455.693665 210.667450,455.680054 
		  C213.045197,455.674164 215.768967,455.858063 215.576492,452.380402 
		  C215.410629,449.383667 217.129196,445.874390 212.268570,444.184601 
		  C199.703003,439.816254 194.847702,427.441437 200.539154,415.410767 
		  C202.637009,410.976257 205.873474,407.963928 210.735947,406.563812 
		  C219.560440,404.022858 222.725937,399.217163 221.891663,390.225098 
		  C220.832718,378.811340 227.629211,369.763672 239.387390,368.091614 
		  C243.812698,367.462341 246.734818,365.601837 249.349228,362.381805 
		  C250.812790,360.579224 252.538422,358.978394 254.227982,357.372986 
		  C256.653870,355.067963 257.652924,352.544769 257.490509,348.975800 
		  C256.975098,337.650055 263.177704,328.804749 273.258423,325.594574 
		  C282.592224,322.622253 294.401001,327.409119 301.047943,336.859436 
		  C306.493927,344.602295 306.092346,355.572693 299.832947,363.374481 
		  C295.363800,368.944946 289.191620,371.430603 282.225342,371.204102 
		  C278.454620,371.081512 275.869476,372.380951 273.505981,374.968994 
		  C271.709442,376.936279 269.819336,378.824982 267.884491,380.657410 
		  C265.485016,382.929840 264.351318,385.468018 264.138428,388.949402 
		  C263.601227,397.732361 260.000031,404.560791 250.767059,407.334625 
		  C245.282593,408.982300 242.298798,414.516327 242.765335,420.075470 
		  C243.839890,432.879669 242.934708,445.720001 243.127777,458.543579 
		  C243.220596,464.708466 243.249420,470.877686 243.122116,477.041138 
		  C243.051910,480.440094 244.331528,481.749908 247.825333,481.703094 
		  C259.322510,481.548920 270.823090,481.649261 282.322357,481.649933 
		  C327.319458,481.652466 372.316925,481.737335 417.313263,481.551788 
		  C422.974091,481.528442 427.255005,483.269409 431.015625,487.269348 
		  C446.311188,503.538300 462.144592,519.281433 478.249573,534.741028 
		  C483.272064,539.562317 485.789490,544.719604 485.423340,551.879883 
		  C484.896393,562.184814 485.388641,572.538696 485.309692,582.870667 
		  C485.194702,597.912537 470.817444,608.353333 456.521027,603.558228 
		  C453.256805,602.463440 451.370392,603.054688 449.141235,605.366272 
		  C440.930847,613.880432 432.553833,622.233887 424.253235,630.661255 
		  C424.036194,630.881592 423.976624,631.256958 423.586426,632.146240 
		  C431.068085,639.129517 439.478516,644.965881 448.691772,649.731689 
		  C450.200836,647.435059 449.587189,645.763184 449.457336,644.150452 
		  C448.826080,636.311523 451.448151,629.961731 458.389191,626.002808 
		  C464.865997,622.308594 471.567596,622.550232 477.755432,626.723206 
		  C484.465973,631.248535 486.947021,637.850220 485.985931,645.809448 
		  C485.946228,646.138428 485.790436,646.457092 485.775146,646.784607 
		  C485.636536,649.753479 482.221313,653.207336 485.525360,655.525635 
		  C488.875885,657.876465 493.265808,656.739868 497.192932,656.037354 
		  C500.221832,655.495483 499.694427,652.905640 499.696533,650.820801 
		  C499.712280,635.155334 499.659088,619.489929 499.661163,603.824463 
		  C499.666321,565.327087 499.695221,526.829712 499.700439,488.332336 
		  C499.701416,481.354858 499.670471,481.350555 492.868530,481.321136 
		  C489.868744,481.308167 486.863800,481.426208 483.870514,481.285858 
		  C480.726593,481.138397 478.182373,482.047211 475.613708,484.004333 
		  C464.908295,492.160950 450.651398,490.115326 442.865662,479.540802 
		  C434.766571,468.540619 436.640869,453.583679 447.119751,445.592804 
		  C457.700592,437.524170 472.966034,439.595947 480.717468,450.634338 
		  C483.331360,454.356567 486.575470,453.863190 489.940186,453.874298 
		  C500.795135,453.910126 499.712830,455.134399 499.717377,444.456879 
		  C499.743958,381.794556 499.708557,319.132172 499.767792,256.469910 
		  C499.771667,252.375320 499.078888,248.881927 496.661072,245.306290 
		  C490.554108,236.274734 491.794556,224.346725 498.966949,217.225876 
		  C505.493286,210.746490 516.114746,209.647079 524.364929,214.597061 
		  C534.417664,220.628510 536.953735,235.438614 529.393799,245.831238 
		  C527.183105,248.870300 526.332275,251.838577 526.333618,255.495605 
		  C526.382935,386.820496 526.359009,518.145447 526.412292,649.470337 
		  C526.413208,651.717712 525.016846,654.991150 528.506531,655.859253 
		  C532.512512,656.855713 536.818787,657.679138 540.668335,655.543457 
		  C542.597046,654.473450 541.857727,651.887329 541.861206,649.952820 
		  C541.916138,619.621643 541.920959,589.290466 541.942017,558.959229 
		  C541.943176,557.292908 541.912354,555.621887 542.021057,553.961182 
		  C542.411133,548.002075 543.895325,546.323059 549.743530,545.572327 
		  C552.706360,545.191895 555.711487,544.968750 558.697571,544.967957 
		  C590.861877,544.958984 623.026367,544.974731 655.190369,545.088440 
		  C658.896790,545.101562 661.648926,544.261658 664.343323,541.310852 
		  C671.161865,533.843079 684.627930,532.410950 694.005859,537.575623 
		  C703.358276,542.726318 708.425110,554.000000 706.073975,564.427368 
		  C703.763428,574.675110 694.057312,582.774109 683.591309,583.462402 
		  C675.664856,583.983643 668.711731,581.882812 663.043030,576.283020 
		  C660.614746,573.884155 658.007263,572.885437 654.590820,572.897766 
		  C628.093445,572.993652 601.595520,572.973816 575.097900,572.921814 
		  C571.502686,572.914795 569.021423,573.447510 569.033691,578.001343 
		  C569.121399,610.497620 569.055359,642.994324 569.059998,675.490845 
		  C569.060120,676.464294 569.298950,677.437683 569.625854,679.933228 
		  C581.989197,667.003906 593.598694,654.862854 605.172729,642.758972 
		  C604.108704,640.582214 602.236633,640.114990 600.719482,639.206238 
		  C589.639221,632.569397 584.279053,620.607178 586.892700,605.930481 
		  C589.018738,593.991699 596.859680,586.582703 608.378784,583.310242 
		  C622.575378,579.277222 635.920227,585.318359 642.541199,598.734192 
		  C644.026428,601.743652 645.847534,602.726562 649.109741,602.707397 
		  C670.440918,602.582458 691.773743,602.570923 713.104736,602.715698 
		  C717.097595,602.742737 718.766602,601.639099 718.796692,597.376953 
		  C718.839722,591.279968 721.667358,588.185486 727.765320,587.360229 
		  C732.031494,586.782837 736.402588,586.884094 740.727844,586.857544 
		  C754.726318,586.771484 768.727905,586.592957 782.723083,586.800720 
		  C790.106323,586.910400 796.038208,584.147217 801.013550,579.073364 
		  C815.162903,564.643860 820.140625,547.046448 818.206055,527.310547 
		  C816.940125,514.395935 815.058838,501.541565 813.796875,488.626617 
		  C813.444946,485.025421 811.936951,484.153076 808.750671,484.193054 
		  C798.919250,484.316467 789.064575,483.894684 779.258728,484.423065 
		  C766.730347,485.098206 758.355713,477.397491 761.080811,462.493469 
		  C761.672913,459.255157 761.108032,456.997833 759.042236,454.815979 
		  C753.314392,448.766266 747.526184,442.772919 741.859619,436.666504 
		  C740.081787,434.750549 738.013000,434.351624 735.568542,434.367798 
		  C728.586792,434.413971 721.629028,435.561249 714.616089,434.485413 
		  C707.598389,433.408813 703.082458,428.967224 702.751831,421.905701 
		  C702.510437,416.750214 702.496094,411.567810 702.718689,406.412018 
		  C702.890747,402.425537 701.254700,401.192902 697.417969,401.267090 
		  C687.755615,401.454041 678.085693,401.417267 668.421936,401.267059 
		  C665.558228,401.222565 663.339233,402.377563 660.978699,403.662018 
		  C653.719299,407.612152 646.081665,406.363861 640.475464,400.467468 
		  C635.000427,394.708923 634.123718,385.985870 638.340088,379.220917 
		  C642.613403,372.364685 651.116699,368.429382 658.141357,371.707123 
		  C665.531555,375.155457 672.951843,374.752930 680.541504,374.772552 
		  C686.837341,374.788818 693.133362,374.775909 699.091370,374.775909 
		  C700.605652,372.436768 699.244263,371.019135 698.691833,369.573547 
		  C694.802490,359.396149 696.198547,350.304321 704.031372,342.453644 
		  C704.737244,341.746124 705.404419,340.999847 706.089355,340.271393 
		  C714.905579,330.895264 714.405273,332.886841 705.247375,325.294525 
		  C699.094360,320.193451 692.712646,315.361633 686.329956,310.546173 
		  C678.772156,304.844025 678.723999,304.907837 672.710449,312.537994 
		  C672.691711,314.251587 674.103455,315.072906 675.084534,316.138611 
		  C682.469116,324.160126 683.950989,333.980438 678.988831,342.224976 
		  C674.153198,350.259399 663.993591,354.807190 655.452698,352.760559 
		  C645.352539,350.340302 637.974365,341.647583 637.780579,331.204651 
		  C637.533264,317.876709 637.613220,304.540497 637.725220,291.209320 
		  C637.763855,286.607147 636.848877,283.197937 632.481384,280.356262 
		  C624.891418,275.417999 622.544067,264.607208 626.312439,256.187225 
		  C630.044800,247.847595 639.631531,242.453857 647.811646,244.091263 
		  C657.668518,246.064301 664.896729,254.039658 665.361389,263.215088 
		  C665.587891,267.687836 664.954163,271.907501 662.327026,275.577332 
		  C660.130859,278.645020 660.129883,281.616577 661.886963,284.878784 
		  C664.835205,284.307098 665.769592,281.882751 667.035583,279.793915 
		  C671.705261,272.089081 679.382996,267.754333 686.299011,268.914154 
		  C695.040161,270.379974 700.811890,275.845703 702.647217,285.490051 
		  C703.414612,289.522644 705.299561,291.908844 708.583008,293.996399 
		  C721.059021,301.928406 734.054565,309.134644 743.677917,320.899841 
		  C751.191406,330.085602 751.329407,327.430511 743.555908,336.178894 
		  C738.688293,341.656860 733.584900,346.926025 728.560181,352.263306 
		  C727.093933,353.820648 725.948486,355.312286 727.661377,357.442535 
		  C730.680176,361.196960 730.880920,365.791382 730.983521,370.256287 
		  C731.232361,381.083740 731.321777,391.918365 731.233032,402.748108 
		  C731.203430,406.361481 732.324768,408.304962 736.076111,407.620697 
		  C748.768738,405.305481 757.431091,410.948792 765.065125,420.628113 
		  C772.470215,430.017059 781.123901,438.420624 789.212402,447.272278 
		  C789.995056,448.128784 791.100769,449.004517 791.306091,450.022705 
		  C792.567627,456.277863 797.059753,456.091919 801.942261,455.927643 
		  C810.267517,455.647461 818.605286,455.651764 826.937317,455.680023 
		  C834.660095,455.706207 838.473694,459.421051 839.346619,467.073273 
		  C841.437622,485.403046 844.066162,503.681915 845.704468,522.050293 
		  C848.034485,548.174438 842.573792,572.369385 825.597595,593.566162 
	  M398.755371,570.361511 
		  C391.217743,570.600525 389.393738,572.962158 391.450928,579.839783 
		  C393.989685,588.327515 397.267212,596.504700 401.851196,604.111389 
		  C403.182861,606.321167 404.197357,608.837524 407.888855,611.196045 
		  C409.357544,609.367310 410.459869,607.224976 412.041260,605.529541 
		  C420.904053,596.027710 429.693756,586.444336 438.896240,577.278137 
		  C443.935822,572.258423 447.841827,566.029663 454.352692,562.497681 
		  C458.124725,560.451416 459.099518,555.870239 456.459625,552.430664 
		  C454.644501,550.065613 452.438385,547.987915 450.314423,545.874878 
		  C439.566223,535.181824 428.682556,524.622192 418.084473,513.782898 
		  C414.931885,510.558563 411.705505,509.183350 407.155518,509.195282 
		  C352.001495,509.339752 296.846985,509.309265 241.692596,509.299194 
		  C223.531876,509.295868 215.875031,502.169647 214.644104,484.247101 
		  C214.531982,482.614532 214.837875,480.603363 212.275970,480.750061 
		  C210.145767,480.872040 208.285416,481.531738 208.341019,484.242554 
		  C208.490570,491.533234 207.244827,498.701843 208.031952,506.131561 
		  C210.634125,530.693298 228.753632,560.316772 266.121124,558.865601 
		  C273.855621,558.565247 279.384857,561.353027 284.377167,567.024231 
		  C290.528168,574.011780 296.897247,580.902588 304.620544,586.263184 
		  C306.942200,587.874573 309.027161,590.311951 312.847107,589.958374 
		  C312.847107,578.466614 312.863403,567.174072 312.835724,555.881714 
		  C312.828705,553.030518 310.996429,552.295715 308.501923,552.291260 
		  C302.170288,552.279846 295.836456,552.284790 289.508423,552.107178 
		  C286.846771,552.032532 284.398041,551.875061 281.798004,553.169617 
		  C273.475281,557.313293 264.823273,555.592834 259.625275,549.135681 
		  C254.353867,542.587280 254.275131,534.053345 259.425537,527.478577 
		  C264.810272,520.604736 273.580109,518.678528 281.906036,522.844360 
		  C284.848541,524.316650 287.769043,524.994141 291.007080,524.940002 
		  C295.670807,524.861938 300.342010,524.855530 305.001617,525.035400 
		  C308.163361,525.157410 310.686127,524.256958 313.228424,522.271667 
		  C321.569031,515.758545 332.036926,516.504211 340.089661,523.873230 
		  C347.013275,530.208984 348.173126,540.311218 343.003906,548.976379 
		  C342.074829,550.533752 340.563599,552.145874 340.521484,553.763916 
		  C340.281464,562.990295 340.405029,572.226196 340.405029,582.114990 
		  C341.690582,581.223755 342.384735,580.828369 342.979584,580.317383 
		  C353.316528,571.437073 362.910706,561.528564 376.105774,556.633118 
		  C378.396790,555.783142 378.704651,553.930115 378.376343,551.706970 
		  C377.829895,548.007080 378.386688,544.376404 379.854309,540.964478 
		  C384.124817,531.036438 394.635559,525.886719 404.836334,528.619934 
		  C415.773834,531.550537 422.817474,542.160645 421.259796,553.359192 
		  C419.928375,562.931396 410.748657,570.150146 398.755371,570.361511 
	  M746.653076,635.001953 
		  C746.883911,630.266052 743.671021,630.254456 740.295776,630.259888 
		  C710.490173,630.307861 680.683716,630.441895 650.879761,630.232727 
		  C645.405457,630.194397 640.825134,631.046326 636.953918,635.129333 
		  C634.645874,637.563538 631.532654,638.927002 628.434753,640.208923 
		  C626.758606,640.902527 624.610901,641.594421 624.638489,643.735168 
		  C624.749939,652.371155 621.394592,661.823059 630.755615,668.324097 
		  C635.146301,671.373291 637.562012,676.773376 643.004761,679.661560 
		  C643.088745,674.324463 640.379761,670.213074 640.319092,665.493591 
		  C640.187622,655.262939 646.234619,647.348511 656.527954,645.052307 
		  C664.157227,643.350342 673.472107,648.127319 676.809509,655.453369 
		  C681.009277,664.672485 678.542358,673.325989 669.758667,679.336182 
		  C667.288147,681.026550 666.081665,682.976562 666.265747,685.955139 
		  C666.409241,688.277405 666.413696,690.623352 666.264709,692.945007 
		  C666.046631,696.342957 667.414612,697.813232 670.897949,697.692200 
		  C680.864563,697.346130 690.837463,698.107117 700.809082,696.771667 
		  C716.297729,694.697327 728.221191,687.027283 737.014465,674.416809 
		  C745.070129,662.864258 747.138855,649.661560 746.653076,635.001953 
	  M621.606689,698.888245 
		  C616.366089,693.612061 611.125488,688.335938 605.695435,682.869141 
		  C600.548340,686.939453 596.738647,691.555359 592.447266,695.665588 
		  C589.211731,698.764526 589.229065,700.887634 592.601074,704.133667 
		  C604.330566,715.424622 615.872925,726.915039 626.955139,738.859619 
		  C630.485352,742.664612 634.473877,746.044312 638.646362,749.991028 
		  C638.646362,738.949341 638.667603,728.389099 638.624146,717.829041 
		  C638.617371,716.188965 637.259155,715.226257 636.239929,714.158142 
		  C631.535950,709.228699 626.807068,704.322998 621.606689,698.888245 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M640.656738,445.205231 
		  C638.645630,447.261322 639.002869,448.882782 640.670349,450.607086 
		  C645.881592,455.996155 651.060486,461.417572 656.183411,466.890564 
		  C658.990295,469.889160 660.848328,469.816040 663.528870,466.250732 
		  C674.408325,451.780334 695.632019,452.456116 705.056274,467.315216 
		  C710.180176,475.393951 709.747864,486.107361 703.644714,494.020477 
		  C701.888733,496.297302 701.114319,498.544464 701.134460,501.324310 
		  C701.182922,507.989471 701.005676,514.656860 701.100159,521.320862 
		  C701.150879,524.898560 699.842163,526.437073 696.089111,526.269348 
		  C690.099792,526.001587 684.077637,525.839172 678.099609,526.173401 
		  C674.164673,526.393433 673.080750,524.649963 673.087891,521.289124 
		  C673.101685,514.792114 672.887024,508.285004 673.191772,501.802002 
		  C673.360657,498.207947 672.071655,496.665314 668.686279,497.251190 
		  C653.199829,499.931305 641.917419,493.594116 632.546082,481.652679 
		  C627.641785,475.403412 621.410828,470.193085 615.758789,464.533722 
		  C612.287720,461.058136 609.251038,457.321838 608.767944,452.196472 
		  C608.537170,449.748230 607.024109,448.910217 605.022766,449.305145 
		  C593.945801,451.490936 587.089050,445.239136 580.212036,437.908051 
		  C569.616028,426.612549 558.496094,415.803650 547.463135,404.925507 
		  C543.384644,400.904205 541.815674,396.339691 541.835510,390.615112 
		  C541.978149,349.452789 541.856750,308.289673 541.929138,267.126953 
		  C541.942688,259.457428 541.717896,252.121124 538.479919,244.752975 
		  C534.929321,236.673523 539.360779,226.030914 546.851013,221.079056 
		  C554.140991,216.259628 564.774231,217.104965 571.491272,223.037933 
		  C578.884216,229.567886 581.006592,241.996841 574.276489,250.221939 
		  C568.887695,256.807800 568.398499,263.797607 568.572998,271.132782 
		  C569.353699,303.957001 569.364380,336.790161 568.134216,369.579620 
		  C567.677185,381.760773 570.612732,391.059570 580.048523,398.854950 
		  C586.049988,403.813110 591.043701,409.984497 596.555420,415.546387 
		  C598.044861,417.049408 599.354126,418.887939 601.615723,419.364136 
		  C615.856567,406.938995 626.416443,405.428619 637.154968,414.381714 
		  C643.996460,420.085693 649.699097,432.659424 640.656738,445.205231 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M457.622314,336.000214 
		  C457.589874,312.027374 456.638275,288.553040 457.633514,265.082886 
		  C457.840393,260.203186 456.679199,256.238098 453.316498,252.353790 
		  C446.244476,244.184738 447.101898,230.490341 454.519653,223.108002 
		  C461.520874,216.140213 473.814178,215.882538 482.012573,222.531708 
		  C488.698456,227.954178 491.367432,237.735367 487.631836,246.103577 
		  C485.091553,251.794174 484.412140,257.568817 484.411621,263.587280 
		  C484.407288,313.085968 484.416656,362.584686 484.411591,412.083374 
		  C484.410645,421.193848 481.447754,424.937134 472.364716,426.636627 
		  C468.959656,427.273712 465.404236,427.248657 461.915680,427.271912 
		  C450.249786,427.349792 438.573242,427.597321 426.921112,427.193451 
		  C421.548035,427.007263 417.739227,428.807251 414.277161,432.623138 
		  C405.652710,442.129150 396.458038,451.071991 387.143646,459.907074 
		  C383.441284,463.418884 379.443268,464.858643 374.536072,464.638672 
		  C370.709412,464.467133 366.874542,464.477783 363.043335,464.406891 
		  C358.319794,464.319427 354.086670,465.073639 349.956116,468.058350 
		  C342.941132,473.127197 335.242462,472.788544 327.915955,468.324524 
		  C319.799347,463.379211 317.301849,455.743347 318.780823,446.775055 
		  C320.133881,438.570343 325.522766,433.637054 333.147552,430.988586 
		  C340.415314,428.464111 346.826874,430.077698 352.681091,434.973602 
		  C358.539490,439.873077 369.364349,439.143829 374.784668,433.717926 
		  C383.381989,425.111633 392.303833,416.800049 400.467133,407.800293 
		  C405.650055,402.086212 411.592377,399.882629 418.966949,399.978302 
		  C429.464966,400.114532 439.966003,400.048401 450.465607,400.020996 
		  C457.213165,400.003387 457.629120,399.609314 457.636353,392.997833 
		  C457.657013,374.165283 457.630493,355.332703 457.622314,336.000214 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M284.762451,312.173218 
		  C290.755829,304.279510 297.174316,297.559204 307.307983,295.603729 
		  C310.457764,294.995911 313.300568,292.809845 316.291260,291.361511 
		  C318.938965,290.079315 320.070587,287.859802 320.599884,285.056305 
		  C322.404205,275.498901 328.968292,269.740356 338.622437,269.726898 
		  C346.955322,269.715271 352.558929,263.969604 359.270782,260.574921 
		  C361.088440,259.655609 361.084747,257.112488 361.980896,255.346939 
		  C366.425812,246.589630 375.624329,242.030090 385.324005,243.833786 
		  C393.346100,245.325562 400.492249,253.295349 401.291626,261.641754 
		  C402.295349,272.122223 397.575104,280.018311 388.041138,283.798920 
		  C384.863678,285.058868 381.651123,285.339752 378.251099,284.643402 
		  C371.582489,283.277649 363.381622,289.984192 363.361053,296.748505 
		  C363.318542,310.743561 363.191803,324.741302 363.421448,338.732605 
		  C363.494171,343.163086 362.004791,344.620483 357.654541,344.398438 
		  C351.672211,344.093048 345.651550,344.102570 339.668488,344.401459 
		  C335.674072,344.600983 334.262512,342.891663 334.331696,339.238037 
		  C334.464020,332.248322 334.616394,325.258423 334.656952,318.268005 
		  C334.666107,316.687073 335.292999,314.676971 333.531158,313.692108 
		  C331.766296,312.705505 330.365601,314.209717 329.079132,315.153931 
		  C322.369385,320.078644 315.679596,325.032593 309.072388,330.093262 
		  C307.643127,331.187927 306.308319,332.325714 304.694305,330.986328 
		  C297.700165,325.182190 289.780273,320.365234 284.762451,312.173218 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M611.697510,500.636475 
		  C615.252197,500.884460 617.949280,500.031158 620.643066,498.387177 
		  C628.555298,493.558502 637.613220,494.714233 643.422363,501.015198 
		  C649.185852,507.266663 650.017456,516.492371 645.413391,523.102600 
		  C640.113281,530.712341 631.208740,533.287964 622.516724,529.328247 
		  C619.209534,527.821655 615.953613,527.277954 612.405334,527.307434 
		  C601.084595,527.401428 589.762451,527.413086 578.441345,527.355469 
		  C567.668457,527.300659 563.020569,522.997192 563.030701,512.340576 
		  C563.035095,507.723267 561.663208,505.304718 557.303894,503.386169 
		  C543.454224,497.290894 537.194214,482.810883 541.276672,467.607788 
		  C544.877991,454.196808 558.162170,445.216492 572.079224,446.784821 
		  C586.909424,448.456055 598.292480,460.119843 599.087280,474.918152 
		  C599.423523,481.178345 597.476929,486.996063 594.179993,492.417877 
		  C590.361267,498.697815 591.531494,500.646698 598.750305,500.657318 
		  C602.912537,500.663422 607.074829,500.644440 611.697510,500.636475 
	  M573.759216,482.422882 
		  C576.928528,479.988586 578.882324,477.057831 576.668396,473.077026 
		  C574.635071,469.420868 571.498718,467.497559 567.173706,468.647400 
		  C563.287048,469.680725 560.848389,473.806671 561.802734,477.420990 
		  C563.085266,482.278229 567.502686,484.378418 573.759216,482.422882 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M797.355225,394.673767 
		  C799.637207,400.625977 802.450195,404.995697 809.432983,406.003082 
		  C817.459167,407.161041 822.231628,412.991699 824.082703,420.657166 
		  C826.171204,429.306152 823.627136,436.941559 816.760498,442.607025 
		  C810.130066,448.077545 802.545349,449.781128 794.393921,445.988953 
		  C786.326294,442.235809 782.392700,435.936310 782.617065,426.899292 
		  C782.754150,421.377441 774.693054,410.783875 769.515137,409.040894 
		  C760.686035,406.068817 755.109558,398.772980 754.961975,389.067749 
		  C754.906006,385.389587 753.652710,382.748077 751.275940,380.214447 
		  C746.377991,374.993134 741.601257,369.657928 736.784424,364.360657 
		  C735.240356,362.662567 733.992554,360.858276 736.032288,358.717834 
		  C743.601807,350.774445 750.450378,342.122803 759.069824,335.212616 
		  C759.556885,334.822144 760.258240,334.698944 761.060852,334.368652 
		  C763.301270,337.244171 762.435913,340.529633 762.205627,343.455048 
		  C761.794983,348.672272 763.374939,352.850616 766.896667,356.584717 
		  C769.405945,359.245270 771.666748,362.143158 773.991089,364.974030 
		  C775.304993,366.574341 776.841553,367.471008 778.952393,367.948334 
		  C793.456238,371.228027 799.100342,379.407196 797.355225,394.673767 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M283.200012,406.649719 
		  C278.295044,398.429230 278.546021,390.253265 283.646942,384.571686 
		  C289.352081,378.217163 296.958984,377.145935 305.952118,381.384460 
		  C311.042175,383.783478 316.405884,382.691193 321.638062,382.266968 
		  C324.051941,382.071228 324.301483,379.471008 324.458832,377.512787 
		  C325.962433,358.802002 348.846252,348.179962 365.635254,359.009735 
		  C376.404297,365.956329 381.340088,381.427368 376.369843,393.440674 
		  C371.093475,406.193878 357.266785,413.909241 344.384033,410.353180 
		  C333.001129,407.211151 321.516937,409.664398 310.143463,408.464844 
		  C307.856445,408.223633 306.184998,410.050201 304.248688,410.954437 
		  C296.452057,414.595367 289.516907,413.286194 283.200012,406.649719 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M803.479675,521.548462 
		  C811.262512,531.369629 812.048767,543.454651 803.652771,549.489563 
		  C797.212891,554.118469 792.801880,559.505371 789.022278,566.061951 
		  C787.160034,569.292542 783.858887,570.479187 780.025757,570.392578 
		  C773.033203,570.234497 766.035278,570.329163 759.039856,570.279785 
		  C753.407104,570.240051 748.031677,570.277161 742.584167,572.949341 
		  C735.818848,576.267944 726.760254,573.030579 722.565247,567.074585 
		  C717.808167,560.320557 718.234680,550.449097 723.549805,544.288513 
		  C728.429199,538.632874 738.032654,536.302063 744.536011,540.220032 
		  C749.626953,543.287048 754.799988,543.665283 760.327942,543.602417 
		  C767.532715,543.520569 767.621216,543.479248 767.652649,536.379333 
		  C767.704224,524.731506 774.041199,517.228577 785.481689,515.368042 
		  C792.406433,514.241943 798.268311,516.440796 803.479675,521.548462 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M614.415588,299.534515 
		  C620.562988,313.227600 613.469788,325.608765 600.007996,325.364594 
		  C589.124573,325.167206 581.647461,314.759277 585.461731,303.774780 
		  C588.150940,296.030365 587.459290,288.405884 587.355469,280.648010 
		  C587.333252,278.987915 586.901489,277.293945 587.117798,275.677002 
		  C588.000732,269.074921 586.848083,263.283142 583.415894,257.236816 
		  C578.711853,248.949768 582.306152,237.188492 589.812622,231.753662 
		  C597.265442,226.357712 608.499634,227.045059 615.174744,233.305328 
		  C622.752747,240.412369 625.049011,251.409576 618.587463,259.434906 
		  C613.348816,265.941315 613.071960,272.573303 613.392395,279.836700 
		  C613.676392,286.275909 612.332764,292.790619 614.415588,299.534515 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M433.874573,324.094971 
		  C445.313171,336.553467 447.321442,350.674530 439.717682,363.595459 
		  C432.960175,375.078369 419.910431,380.375793 406.161743,377.217102 
		  C393.768219,374.369751 383.579376,361.838135 382.880066,348.582214 
		  C382.195831,335.611847 390.142181,323.311249 402.228058,318.878296 
		  C413.576172,314.716003 424.093445,316.246033 433.874573,324.094971 
	  M422.392609,347.580383 
		  C421.836365,346.027374 421.525269,344.322815 420.677094,342.950226 
		  C418.289551,339.086395 413.155884,337.860413 409.294403,340.022858 
		  C405.665619,342.054901 403.875336,346.732788 405.715302,350.345245 
		  C407.387543,353.628326 410.117401,355.862274 414.063171,355.608032 
		  C418.620117,355.314453 421.241241,352.577362 422.392609,347.580383 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M440.359985,301.898926 
		  C440.968262,306.893707 439.165253,308.704285 434.495209,308.391479 
		  C429.185425,308.035828 423.830811,308.127258 418.505157,308.306366 
		  C414.782898,308.431610 413.493286,306.863983 413.561493,303.275787 
		  C413.745117,293.613434 413.525970,283.939728 413.882507,274.285919 
		  C414.058044,269.533600 412.966675,265.875702 409.746399,262.126190 
		  C403.781006,255.180298 403.109985,246.930420 407.120117,238.754700 
		  C410.840576,231.169510 417.478638,227.669022 425.831635,227.714813 
		  C440.738037,227.796509 450.022125,244.955124 442.601410,258.936157 
		  C440.955353,262.037445 440.279388,265.011017 440.311249,268.418549 
		  C440.414185,279.415680 440.356812,290.414276 440.359985,301.898926 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M624.065308,372.031616 
		  C615.458496,380.291656 604.630005,381.861450 595.567078,376.389984 
		  C586.567139,370.956543 582.531555,359.839294 585.790161,349.456726 
		  C588.883972,339.599152 598.142090,333.100403 608.629089,333.747406 
		  C617.521179,334.295959 624.121094,338.822021 627.800476,346.820404 
		  C631.878967,355.686401 631.291443,364.266083 624.065308,372.031616 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M260.875732,447.565796 
		  C260.165649,436.997040 263.929962,429.124664 273.287720,424.786652 
		  C281.708588,420.883026 289.863617,422.046448 297.031647,428.074158 
		  C303.883423,433.835876 306.350006,443.467407 303.322784,451.610992 
		  C299.904480,460.806458 291.516693,466.658020 281.887238,466.565063 
		  C273.198669,466.481140 265.279907,460.787720 262.145874,452.309143 
		  C261.629944,450.913361 261.328979,449.438141 260.875732,447.565796 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M744.253601,494.514496 
		  C752.766663,500.843414 754.482361,510.084717 748.979309,518.368469 
		  C743.530518,526.570557 733.579529,528.847778 725.391724,523.766296 
		  C717.858154,519.090881 715.511414,508.815338 720.047119,500.364716 
		  C724.361084,492.327332 734.157104,489.850464 744.253601,494.514496 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M660.756897,437.891449 
		  C657.140564,429.374481 658.201416,421.763794 663.463806,416.833893 
		  C669.006470,411.641418 676.265076,410.366058 682.776367,413.440491 
		  C689.250183,416.497253 693.421875,423.470337 692.888855,430.343964 
		  C692.339478,437.429474 687.382263,443.445007 680.390930,445.510162 
		  C672.812561,447.748718 666.236816,445.290924 660.756897,437.891449 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M732.819336,483.551422 
		  C725.509888,480.085602 723.019958,474.272430 723.826721,467.026550 
		  C724.546570,460.561401 728.100769,456.006561 734.407837,453.834473 
		  C740.601685,451.701324 747.729126,453.834320 751.823486,459.060211 
		  C756.069458,464.479675 756.479187,472.101990 752.826416,477.717651 
		  C748.992676,483.611725 742.193604,486.274902 735.542847,484.473999 
		  C734.743896,484.257690 733.964233,483.970367 732.819336,483.551422 
	  z"
      />
      <path
        fill="currentColor"
        opacity="1.000000"
        stroke="black"
        d="
	  M730.317749,669.612915 
		  C727.907532,679.630127 719.545776,686.530762 710.764343,686.170349 
		  C701.233582,685.779236 693.293945,678.426270 691.923401,668.721741 
		  C690.618530,659.482117 696.076843,650.205505 704.812439,647.559448 
		  C718.796265,643.323608 732.225464,652.838745 730.317749,669.612915 
	  z"
      />
    </svg>
  );
};

export default Logo;
