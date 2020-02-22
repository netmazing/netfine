import React from "react";
import '../scss/cursor.scss';

class Cursor extends React.Component {
    
    componentDidMount(){
        // document.body.style.cursor = 'none';


        const cursor = document.querySelector('.cursor');

        // const links = document.querySelectorAll('.menu-link');
        // const linksArr = [...links];

        window.addEventListener('mousemove', function cursorMove(e){
            cursor.style.top = e.clientY + 'px';
            cursor.style.left = e.clientX + 'px';
            
            // if(e.target.className === 'menu-link') {
            //     cursor.classList.add('cursor--on-focus')
            // } else {
            //     cursor.classList.remove('cursor--on-focus')
            // }
            // linksArr.map(link => link.addEventListener('mousemove', function(){
            //     cursor.classList.add('cursor--on-hover');
            // }))
        })

        


        // let cursor = document.createElement('div');
        // cursor.classList.add('cursor');
        // document.body.appendChild(cursor);

        // function cursorMove(obj, event) {
        //     obj.style = '';
        //     obj.style.top = event.clientY + 'px';
        //     obj.style.left = event.clientX + 'px';
        // }

        // if(cursor){
        //     window.addEventListener('mousemove', function(event) {
        //         let e = event;
        //         let t = event.target;
        //         let c = cursor;

        //         if(t.className === 'menu-link') {
        //             c.style.top = e.clientY + 'px';
        //             c.style.left = e.clientX + 'px';
        //             // c.style.width = t.clientWidth + 'px';
        //             // c.style.height = t.clientHeight + 'px';
        //             c.classList.add('cursor--on-focus');
        //         } else {
        //             cursorMove(c, e);
        //             c.classList.remove('cursor--on-focus')
        //         }
        //     })
        // }
    }

     render () {
        return (
            <div className="cursor"></div>
            // <>
            // </>
            )
     }
   
    };
    export default Cursor;

