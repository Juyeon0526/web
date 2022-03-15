new Chart(document.getElementById("horizontalBar1"), {
        "type": "horizontalBar",
        "data": {
        "labels": ["탐켄치", "신지드", "초가스", "마오카이"],
        "datasets": [{
        "label": "탑",
        "data": [55.8, 55.1, 54.9, 54.6],
        "fill": false,
        "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)"
        ],
        "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
        "rgb(75, 192, 192)"
        ],
        "borderWidth": 1
        }]
        },
        "options": {
        "scales": {
        "xAxes": [{
        "ticks": {
        "beginAtZero": true
        }
        }]
        }
        }
        });
        
        new Chart(document.getElementById("horizontalBar2"), {
        "type": "horizontalBar",
        "data": {
        "labels": ["바이", "람머스", "아무무", "볼리베어"],
        "datasets": [{
        "label": "정글",
        "data": [54.4, 53.4, 52.8, 52.4],
        "fill": false,
        "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)"
        ],
        "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
        "rgb(75, 192, 192)"
        ],
        "borderWidth": 1
        }]
        },
        "options": {
        "scales": {
        "xAxes": [{
        "ticks": {
        "beginAtZero": true
        }
        }]
        }
        }
        });
        
        new Chart(document.getElementById("horizontalBar3"), {
        "type": "horizontalBar",
        "data": {
        "labels": ["질리언", "애니", "갈리오", "아트록스"],
        "datasets": [{
        "label": "미드",
        "data": [55.1, 54.3, 53.7, 53.4],
        "fill": false,
        "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)"
        ],
        "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
        "rgb(75, 192, 192)"
        ],
        "borderWidth": 1
        }]
        },
        "options": {
        "scales": {
        "xAxes": [{
        "ticks": {
        "beginAtZero": true
        }
        }]
        }
        }
        });
        //접기/펼치기
        $(".btn").click(function(e){
            e.preventDefault();
            $(".nav").slideToggle();
            $(".btn").toggleClass("open");
            //var btn = $(".btn").find(">i").attr("class");
            //alert(btn);

            if($(".btn").hasClass("open")){
                //open이 있을 때
                $(".btn").find(">i").attr("class","fa fa-angle-up");
            } else {
                //open이 없을 때
                $(".btn").find(">i").attr("class","fa fa-angle-down");
            }
        });
        
        $(window).resize(function(){
            var wWidth = $(window).width();
            if(wWidth > 600){
                $(".nav").removeAttr("style");
            }
        });
        
        //라이트 박스
        $(".lightbox").lightGallery({
            thumbnail: true,
            autoplay: true,
            pause: 3000,
            progressBar: true
        }); 

        //이미지 슬라이더
        $(".slider").slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			responsive: [
			    {
				    breakpoint: 768,
				    settings: {
				        autoplay: false,
			      	}
			    }
			]
		});
        
        //sns 공유하기
        $(".facebook").click(function(e){
            e.preventDefault();
            window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
        });
        $(".twitter").click(function(e){
            e.preventDefault();
            window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
        });
        
         //검색엔진
        const Searching = Search.prototype;
        
        function Search() {
            this.keyword = document.querySelector('input[name = "search"]');
            this.engine = document.querySelector('.SelectSearch');
            this.button = document.querySelector('.button');
            this.form = document.querySelector('.search');
            
            this.Engine();
        }
        Searching.Engine = function(){
            this.form.addEventListener('submit', e => {
                
                e.preventDefault();
                
                let engine = this.engine.value;
                let keyword = this.keyword.value;
                
                if(engine === 'google') {
                    location.href = 'https://www.google.co.kr/search?q=' + keyword;
                }else if(engine === 'naver'){
                    location.href = 'https://search.naver.com/search.naver?query=' + keyword;
                }
            });
        }
        new Search();
        
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        
        // Get the modal
        var modal1 = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal1) {
            modal1.style.display = "none";
            }
        }