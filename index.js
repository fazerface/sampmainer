"use strict";

// CODE

let people = document.querySelector('.header-tables p strong');

        let wrapper = document.querySelector('.header-slider_container');
        let checkbox = document.querySelector('.btn-content');

        let num = 0;

        people.innerHTML = Math.floor(2100 + Math.random() * (2900 - 2100));

        function slider(){
            for(let i = 0; i < wrapper.children.length; i++){
                let span = document.createElement('span');
                checkbox.append(span);
                checkbox.children[0].classList.add('span-active');
            
                checkbox.children[i].addEventListener('click', () => {
                    num = i;

                    for(let i = 0; i < wrapper.children.length; i++){
                        checkbox.children[i].classList.remove('span-active');
                        wrapper.children[i].classList.remove('active');
                    }

                    checkbox.children[i].classList.add('span-active');
                    wrapper.children[i].classList.add('active');
                });
            };

            setInterval(() => {
                num += 1;

                if(num >= wrapper.children.length) num = 0;

                for(let i = 0; i < wrapper.children.length; i++){
                    checkbox.children[i].classList.remove('span-active');
                    wrapper.children[i].classList.remove('active');

                    checkbox.children[num].classList.add('span-active');
                    wrapper.children[num].classList.add('active');
                }
            }, 8000);
        };

        slider()











