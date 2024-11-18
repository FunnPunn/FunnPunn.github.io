const svgContent = `
<svg viewBox="0 2 999 166" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g>
		<g class="home button" clip-path="url(#home_clip)" >
			<path onclick="window.location.href = './index.html'" class="bg" d="M0 1H249L239 139L191 136.5L143 147L50.5 150.5L29 147L0 120V1Z" fill="#DABAA8"/>
			<path class="passthru" d="M0 123.309C10.5065 123.309 27.264 152.354 37.7705 152.354C46.5849 152.354 55.9118 153.283 64.6547 152.251C72.2309 151.356 79.8809 148.633 87.4188 148.633H142.011C154.853 148.633 166.854 139.329 179.711 139.329C191.86 139.329 203.397 137.468 214.836 137.468C219.481 137.468 225.768 136.405 230.184 137.882C234.939 139.472 237.378 142.733 242.75 143.05M237 141C240.518 141 241.508 133.917 242.308 131.534C244.561 124.819 245.341 118.145 245.341 111.135C245.341 102.531 247.411 94.1398 247.616 85.52C247.792 78.0731 247.232 68.8707 248.964 61.5663C251.715 49.9601 255 37.2651 251.449 25.8675C249.409 19.3201 250.649 10.9169 250.649 4M70.8538 110.169C73.0614 110.169 75.2675 110.152 77.4724 110.122M77.4724 110.122C95.1297 109.883 112.713 108.803 130.401 108.803C132.741 108.803 145.551 110.174 145.668 107.285C145.877 102.116 145.668 96.8969 145.668 91.7254C145.668 82.5647 146.351 72.5635 144.589 63.5286C143.863 59.809 143.624 58.3433 147.466 57.5325C151.796 56.6188 155.871 56.2042 160.455 56.2042C162.612 56.2042 164.165 56.6482 161.854 54.8001C157.802 51.5606 153.844 48.6047 149.265 45.9577C138.485 39.7269 128.085 32.685 117.053 26.9828C113.332 25.0597 109.458 23.5006 105.703 21.6698C104.279 20.9754 102.68 20 101.067 20C98.42 20 96.474 21.6536 94.6728 23.3396C89.2464 28.4188 82.6628 31.9914 77.8876 37.6088C73.3634 42.9308 68.9145 48.4824 63.82 53.32C60.6187 56.3599 58.9836 60.1609 55.0278 62.3521C51.6256 64.2366 46.3849 67.873 53.669 66.7923C62.6512 65.4595 71.7885 65.6083 80.5652 63.7563C82.831 63.2782 79.5418 89.7392 79.4462 92.3705C79.246 97.8838 79.0075 103.687 77.7278 109.068C77.6575 109.364 77.568 109.722 77.4724 110.122ZM77.4724 110.122C76.8891 112.562 76.0797 116.533 78.0475 117" stroke="black" stroke-width="13" stroke-linecap="round"/>
			<path class="detail passthru" d="M159.417 30.0276C159.597 28.5892 162.461 26.9627 162.99 25.2294C163.856 22.3971 165.389 19.1914 165.389 16.2454M176.874 66.7804C183.774 68.0514 190.965 69.9963 198.007 69.9963M171.361 94.345C171.532 98.7808 175.076 102.712 176.415 106.851C177.876 111.366 178.252 115.818 178.252 120.531M46.4024 97.5608C41.229 100.735 35.393 104.879 32.6201 110.424M31.7014 72.2933C30.8521 71.5384 29.3741 71.4058 28.3579 70.813C24.0739 68.314 19.8875 65.6377 15.6221 63.1051M56.5091 33.7029C53.0332 30.9719 51.1809 26.2874 48.6991 22.7026C47.3289 20.7234 45.4578 18.938 44.5645 16.7048" stroke="none" stroke-width="13" stroke-linecap="round"/>
		</g>
		<g class="projects button">
			<path onclick="window.location.href = './projects.html'" class="bg" d="M254 1H630.5V83.5L619 148L557 135.5L487.5 141.5L417 133L353 143L268 147L248.5 139L254 1Z" fill="#DABAA8"/>
			<path class="passthru" d="M238 141C241.518 141 242.508 133.917 243.308 131.534C245.561 124.819 246.341 118.145 246.341 111.135C246.341 102.531 248.411 94.1398 248.616 85.52C248.792 78.0731 248.232 68.8707 249.964 61.5663C252.715 49.9601 256 37.2651 252.449 25.8675C250.409 19.3201 251.649 10.9169 251.649 4M243.75 143.05C245.852 143.174 251.835 144.159 253.433 145.325C260.735 150.655 274.055 148.633 283.098 148.633H321.622C337.662 148.633 353.162 144.911 368.901 144.911C386.48 144.911 401.106 135.607 418.034 135.607C430.312 135.607 443.385 134.223 455.528 136.021C467.473 137.79 476.793 143.05 489.211 143.05H511.151C519.293 143.05 526.228 142.859 533.812 139.329L533.937 139.271C538.53 137.133 541.807 135.607 546.79 135.607C571.916 135.607 595.008 149.773 620.13 150.493M297.392 36C297.392 44.8827 296.595 53.9122 296.595 62.8944V75.8763C296.595 79.1584 297.813 81.887 298.145 85.0479C298.499 88.41 297.447 92.1962 298.633 95.4157C299.741 98.4243 299.785 100.758 299.785 103.967C299.785 108.58 301.38 112.715 301.38 117.348M295 37.595C304.469 37.595 314.96 37.7209 323.711 41.4054C327.373 42.9472 326.901 47.8602 326.901 51.5517C326.901 60.8844 311.406 64.483 304.57 67.901M344.447 42.3802C344.447 56.2806 342.852 70.3554 342.852 84.2503V93.0231C342.852 95.7856 340.459 102.06 340.459 95.8145M342.852 43.9753C346.944 41.8086 348.643 41.2156 353.662 41.7599C359.061 42.3452 364.874 45.0056 369.17 47.7857C371.492 49.2883 371.563 51.8657 371.563 54.3431C371.563 57.5641 369.668 58.8349 366.777 60.2802C363.728 61.805 351.583 61.9302 355.302 66.7934C360.213 73.2154 367.939 77.4019 371.563 84.6491M401.071 47.9629C397.056 47.9629 394.585 47.9296 391.501 50.8428C387.203 54.9014 386.591 62.9085 386.716 68.5213C386.966 79.8099 399.099 81.459 407.894 81.459C416.199 81.459 421.897 70.2888 418.927 63.0273C415.332 54.2393 411.613 49.5579 401.869 49.5579M445.733 42.3802C445.733 56.1641 452.493 70.1565 442.986 82.2565C440.102 85.9272 437.153 88.1735 433.77 91.0736C430.925 93.5123 426.245 92.6244 422.604 92.6244M464.873 48.7604C462.811 49.5337 461.795 62.9197 461.639 65.0211C461.223 70.6419 460.886 76.1658 460.886 81.8578C460.886 84.6722 475.559 81.8362 477.634 81.459M464.873 60.7233C472.223 60.7233 479.216 61.6778 486.406 63.1159M467.266 45.5703H481.621M513.523 47.9629C510.975 47.9629 507.649 47.4515 505.149 48.0072C502.762 48.5375 500.147 54.3618 499.167 56.2926C497.143 60.2805 494.717 67.5167 498.37 71.5342C501.981 75.5071 521.919 82.2113 525.486 75.0788M542.233 50.3555V64.3565C542.233 70.3963 543.828 76.3036 543.828 82.2565M526.282 44.7728C529.941 44.7728 533.574 47.4843 537.27 48.1401C541.136 48.826 544.024 50.3554 548.081 50.3554C552.029 50.3554 554.933 51.1649 558.981 50.3554M577.324 48.7604C573.847 48.7604 570.222 47.6534 568.374 50.8872C563.402 59.5885 573.93 62.2446 579.273 66.6161C583.061 69.7152 587.037 74.3401 585.211 79.8196C583.623 84.5833 570.765 83.0541 566.956 83.0541M618.316 151.669C618.316 144.812 624.348 140.258 624.348 132.821C624.348 127.539 627.052 122.585 627.363 116.99C627.655 111.731 630.379 106.226 630.379 101.158V5.41357" stroke="black" stroke-width="13" stroke-linecap="round"/>
		</g>
		<g class="contact button">
            <path onclick="window.location.href = './contact.html'" class="bg" d="M631 1L986.184 0L993.184 39.5L986.184 81V121.5L977.684 137L930.184 133.5L884.184 121.5L823.184 137L792.184 132L728.184 142L643.184 146L624.684 148.5L631 1Z" fill="#DABAA8"/>
			<path class="passthru" d="M619.813 150.493C637.051 150.988 655.011 150.493 672.449 150.493C677.598 150.493 682.677 151.146 687.385 149.046C692.702 146.674 700.037 143.05 706.028 143.05C724.126 143.05 743.353 137.468 761.548 137.468C779.574 137.468 797.316 140.15 815.317 139.329C831.498 138.591 849.021 133.759 863.935 128.578C882.096 122.269 891.844 122.891 910.905 126.717C928.494 130.248 944.011 139.329 962.614 139.329H983.936M691.285 44.6774H688.415C685.47 44.6774 683.026 46.7478 680.236 47.4296C678.085 47.9556 675.807 49.4477 673.828 50.4768C672.402 51.2183 670.685 52.2232 669.542 53.3666C667.968 54.9401 665.638 56.7673 665.02 58.9891C663.804 63.3676 663.684 67.9434 663.684 72.5145C663.684 75.9542 663.797 79.0342 664.667 82.3832C665.336 84.9625 666.405 87.2261 667.399 89.657C669.47 94.7199 673.988 97.4432 679.136 98.6215C684.823 99.9234 690.958 99.8797 696.77 99.8797C698.922 99.8797 700.635 98.4642 702.608 98.4642M728.794 59.8934C724.467 59.8934 721.329 62.7461 718.375 65.7518C714.317 69.8807 712.966 77.2278 714.128 82.8747C715.208 88.1172 720.324 90.6668 724.902 92.0947C730.736 93.9147 737.85 92.5583 741.887 87.8484C747.228 81.6176 749.682 69.3003 743.302 62.9209C740.99 60.6088 739.318 59.5396 736.048 59.5396C733.89 59.5396 731.511 59.7103 730.209 61.6627M760.995 88.91C760.995 82.1232 762.659 74.899 763.649 68.1895C764.014 65.7157 764.179 63.2241 764.711 60.7781C764.784 60.4423 764.875 58.0069 765.32 59.343C767.236 65.0922 772.055 70.0602 774.756 75.4633C776.792 79.5348 778.292 83.8601 780.457 87.8484C780.807 88.4918 782.513 90.9474 782.6 90.8169C783.764 89.071 783.822 86.6298 784.35 84.6244C785.11 81.7355 785.078 78.7263 785.765 75.8172C786.256 73.739 786.262 71.6598 786.552 69.5656C786.86 67.3416 787.635 65.147 787.869 62.9209C788.102 60.7099 788.003 59.3098 788.95 57.4164M811.597 49.2776C811.597 59.537 811.243 69.8448 811.243 80.0635V85.5483C811.243 86.3706 811.302 90.2075 811.597 89.6177M794.259 44.3236C796.682 44.5439 799.085 44.9466 801.454 45.5228C804.775 46.3305 808.253 45.8874 811.618 46.2698C816.434 46.8171 821.488 46.5295 826.283 46.1125C827.538 46.0034 828.515 46.0631 829.724 45.6604C830.376 45.4428 831.118 45.0313 831.768 45.0313C833.253 45.0313 834.712 43.9697 836.014 43.9697M849.814 47.8622C848.331 49.6423 847.51 51.9429 846.118 53.7991C844.185 56.3766 842.478 59.2446 841.223 62.2328C839.704 65.8493 837.899 69.7528 837.409 73.6743C836.982 77.0888 834.244 80.4882 834.244 83.9559M849.461 48.5699C851.395 48.5699 851.73 48.5584 853.196 49.7494C854.213 50.5756 854.981 52.0231 855.477 53.2487C856.218 55.0794 856.885 56.9041 857.6 58.7532C857.973 59.7182 857.842 60.6947 858.15 61.6627C858.591 63.0489 859.306 64.2231 859.369 65.7125C859.473 68.1763 860.738 70.5121 860.784 72.829C860.82 74.6117 861.281 75.9616 861.767 77.6651C862.003 78.4902 862.234 83.2311 861.492 83.6021M838.137 72.2786H856.184M889.447 42.9081C884.307 42.9081 879.644 47.9114 877.927 52.4624C875.798 58.1036 875.012 66.4094 877.77 71.9247C880.19 76.7648 887.78 79.2551 892.71 79.3558C896.053 79.424 899.372 79.8031 902.736 79.7096C903.797 79.6802 904.27 77.4289 905.371 76.8787M921.648 37.6002C921.648 41.9643 921.294 46.366 921.294 50.7717C921.294 54.0388 920.998 57.7664 921.726 60.955C922.681 65.1309 923.417 77.9775 923.417 73.694M906.786 33C907.743 33.0598 908.679 33.7346 909.617 33.9829C911.668 34.526 913.746 35.0695 915.829 35.477C919.646 36.2238 923.51 36.0615 927.369 36.2044C931.614 36.3616 935.641 36.8283 939.695 35.477M976.684 139.85C976.684 137.635 980.276 136.811 981.415 134.819C982.959 132.116 985.003 129.162 985.996 126.183C987.905 120.456 986.945 112.781 986.212 106.921L986.183 106.695C985.33 99.8662 984.118 92.6482 984.118 85.7806V74.3283C984.118 72.5796 984.542 71.2401 984.794 69.5596C985.028 67.9993 986.822 67.4766 986.822 65.8048C986.822 64.5296 987.392 63.7562 988.211 62.8009C989.856 60.8812 990.266 58.612 991.553 56.4928C993.488 53.3058 992.229 47.2506 992.229 43.6136V27.1299C992.229 18.7822 987.498 12.2836 987.498 4M618 151.669C618 144.812 624.031 140.258 624.031 132.821C624.031 127.539 626.736 122.585 627.047 116.99C627.339 111.731 630.062 106.226 630.062 101.158V5.41357" stroke="black" stroke-width="13" stroke-linecap="round"/>
		</g>
	</g>
	<defs>
		<clipPath id="home_clip">
			<rect width="253" height="161" fill="white"/>
		</clipPath>
		<clipPath id="contact_clip">
		    <rect width="381" height="161" fill="white"/>
		</clipPath>
        <clipPath id="projects_clip">
			<rect width="393" height="161" fill="white"/>
		</clipPath>
	</defs>
</svg>`;


document.getElementById("viewboxWrapper").innerHTML = svgContent;