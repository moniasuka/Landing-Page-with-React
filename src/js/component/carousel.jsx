import React from "react";


export const Carousel = () => {

    return ( 
        <> 
       
       <div id="carouselExampleCaptions" className="carousel slide dflex justify-content-center " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.picsum.photos/id/653/500/400.jpg?hmac=MNiPK6ZeVqTGHMuwq20zY85Ma4T-BWvjF5_e-Xzbef8" className="d-block w-100 tem" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>A Warm Welcome!</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias distinctio, quaerat quis labore molestiae! Harum accusamus cumque necessitatibus reprehenderit fugiat, deserunt quam, sapiente distinctio cupiditate natus aliquam soluta! Minima..</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.picsum.photos/id/653/500/400.jpg?hmac=MNiPK6ZeVqTGHMuwq20zY85Ma4T-BWvjF5_e-Xzbef8" className="d-block w-100 tem" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>A Warm Welcome!</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis inventore minima fuga, repellat nihil aliquam non ducimus laboriosam dignissimos tempora recusandae explicabo voluptatibus iste dolorum est omnis officia facere sapiente..</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.picsum.photos/id/653/500/400.jpg?hmac=MNiPK6ZeVqTGHMuwq20zY85Ma4T-BWvjF5_e-Xzbef8" className="d-block w-100 tem" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>A Warm Welcome!</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ullam unde in, perferendis illum voluptatem minus atque quae quos suscipit officiis sequi commodi fugit! Voluptatibus voluptas nemo asperiores eligendi. Officiis!.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 

       
       
      
        </>
    )
}