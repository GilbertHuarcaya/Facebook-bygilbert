import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image="https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg" profileSrc="https://avatars.githubusercontent.com/gilberthuarcaya" title="Gilbert Huarcaya" />

            <Story image="http://univia.info/wp-content/uploads/2021/04/paisajes-expresivos-734x489-1.jpg" profileSrc="https://mott.pe/noticias/wp-content/uploads/2018/10/las-7-mejores-cuentas-de-fotografos-de-retrato-en-instagram-1.png" title="Realme" />

            <Story image="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg" profileSrc="https://i.pinimg.com/236x/3f/2f/44/3f2f44f05a487a9d65f735aa87ac3b02.jpg" title="Sonny" />

            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRfdhL0WdhjfpBvC8uGkfhoTOuOqB31n67g&usqp=CAU" profileSrc="https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?size=626&ext=jpg" title="Microsoft" />

            <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNI7NtlCCbKAjuqgPPn0RJ9sW5wmsAR7DNw&usqp=CAU" profileSrc="https://d500.epimg.net/cincodias/imagenes/2019/05/28/lifestyle/1559073183_258744_1559073334_rrss_normal.jpg" title="Sayu" />
        </div>
    )
}

export default StoryReel