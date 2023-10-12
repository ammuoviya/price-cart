import React from "react";

export default function Cards(props)
{
  
  const text5="Unlimited Private Projects";
  const text6="Dedicated Phone Support";
  const text7="Free Subdomain";
  const text8="Monthly Status Reports";
  const textn="Not Available"
  return(
    <div class="col-lg-4">
    <div class="card mb-5 mb-lg-0">
      <div class="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">{props.title}</h5>
        <h6 class="card-price text-center">${props.price}<span class="period">/month</span></h6>
        <hr/>
       
        <ul class="fa-ul">
         
          
                {props.text1?(<li><span class="fa-li bold"><i class="fas fa-check"></i></span><b>{props.text1}</b></li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{textn}</li>)}
                {props.text2?(<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.text2}</li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{textn}</li>)}
                {props.text3?(<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.text3}</li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{textn}</li>)}
                {props.text4?(<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.text4}</li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{textn}</li>)}
                {props.text5?(<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.text5}</li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{text5}</li>)}
                 {props.text6?(<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.text6}</li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{text6}</li>)}
               {props.text7?(<li><span class="fa-li"><i class="fas fa-check"></i></span><b>{props.text7}</b></li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{text7}</li>)}
                {props.text8?(<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.text8}</li>
                ):(<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{text8}</li>)}
        
        </ul>
        <div class="d-grid">
         
          <button type="button" class="btn btn-primary text-uppercase">BUTTON</button>
        </div>
      </div>
    </div>
  </div>
  )
}