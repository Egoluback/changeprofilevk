// ==UserScript==
// @name         Change VK profile
// @namespace    https://vk.com/
// @version      0.1
// @description  Adds your features into profile VK
// @author       Egoluback
// @match        *://*/*
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    class ChangeProfile{
        constructor(data){
            this.data = data;
            this.container = "";
            this.moreInfo = "";
            this.newElementContainer = "";
            this.newElementLabel = "";
            this.newElementLabeled = "";
            this.toPost = "";
            this.prevPath = "";
        }

        getRandFromArr(arr){
            return arr[Math.round(Math.random() * (((arr.length - 2) - 0 + 1)))];
        }

        prepare(){
            try {
                this.container = document.querySelector('#profile_short');
                this.moreInfo = document.querySelector('.profile_more_info');
                this.newElementContainer = document.createElement('div');
                this.newElementLabel = document.createElement('div');
                this.newElementLabeled = document.createElement('div');

                this.newElementContainer.className = "clear_fix profile_info_row";
                this.newElementLabel.className = "label fl_l";
                this.newElementLabel.innerHTML = this.data.labelName;

            } catch(Exception) {
                if (Exception.name != "TypeError"){
                  console.log(Exception.name);
                  console.log("Ошибка" + Exception.name + ": " + Exception.message);
                  console.log("Вероятное решение ошибки: зайдите на страницу пользователя ВКонтакте.");
                }
            }
        }

        start(){
            this.prepare();
            setInterval(() => {
                var pathname = window.location.pathname;
                if (!pathname.includes("/feed") && !pathname.includes("/im") && !pathname.includes("/friends") && !pathname.includes("/groups") && !pathname.includes("/albums") && !pathname.includes("/audios") && !pathname.includes("/video") && !pathname.includes("/market") && !pathname.includes("/docs") && pathname != this.prevPath){
                    this.prepare();
                    this.change();
                    this.prevPath = pathname;
                } else {
                    this.prevPath = pathname;
                }
            }, 500);
        }

        change(){
            try{
                if (this.data.isArr){
                    this.toPost = this.getRandFromArr(this.data.data);
                } else{
                    this.toPost = this.data.data;
                }
                console.log("asdadasd");
                this.newElementLabeled.className = "labeled";
                this.newElementLabeled.innerHTML = '<a href="/search?c[name]=0&amp;c[section]=people&amp;c[country]=1&amp;c[city]=1">' + this.toPost + '</a>';

                this.newElementContainer.appendChild(this.newElementLabel);
                this.newElementContainer.appendChild(this.newElementLabeled);
                this.container.insertBefore(this.newElementContainer, this.moreInfo);
            } catch(Exception) {
                if (Exception.name != "TypeError"){
                  console.log(Exception.name);
                  console.log("Ошибка" + Exception.name + ": " + Exception.message);
                  console.log("Вероятное решение ошибки: зайдите на страницу пользователя ВКонтакте.");
                }
            }
        }
    }

    const planets = ["Корусант", "Татуин", "Земля", "Марс", "Венера", "Kepler-438 b"];
    var profileChanger = new ChangeProfile({
        "labelName": "Родная планета: ",
        "data": planets,
        "isArr": true
    });

    profileChanger.start();
})();