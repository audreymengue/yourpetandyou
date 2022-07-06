import React from 'react'

const Contact = () => {
  return (
    <section className='text-center mx-auto p-10'>
        <h1>The maps</h1>
        <iframe width="50%" title="My unique map" height="500px" frameborder="0" allowfullscreen src="//umap.openstreetmap.fr/en/map/untitled-map_784763?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"></iframe><p><a href="//umap.openstreetmap.fr/en/map/untitled-map_784763">See full screen</a></p>
        <form>
            <label>Name: 
                <input type='text' name='name'/>
            </label>
            <textarea></textarea>
        </form>
    </section>
  )
}

export default Contact