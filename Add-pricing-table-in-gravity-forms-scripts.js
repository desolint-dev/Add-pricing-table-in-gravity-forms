jQuery(document).ready(function($) {
jQuery(document).on('gform_post_render', function(event, form_id, current_page){

jQuery(".gf_page_steps .gf_step").each(function(key, value){
      jQuery(this).prepend('<span class="step-awsom-icon"></span>');
})


  jQuery('#input_3_12 .gchoice input').each(function(){
  let plan_value = jQuery(this).val().split('|')
  let plan_text = jQuery(this).siblings('label').text()
  let plan_input_id = jQuery(this).attr('id');
  let Page1 = `<label class="radio-button-field plan_label w-radio" for='${plan_input_id}'>
    <div class="install_time_text">3 to 5 days</div>
    <div id="w-node-b21ba6f1-0a39-c257-4a9f-416cd9183c19-6e84bbe4" class="plan_box_outline" >
      <div id="most_popular" class="social_proof_wrapper_plan">
        <div class="recommended_wrapper">
          <div class="recommended_text">Most popular</div>
        </div>
      </div>
      <div class="pricing19_feature is_signup rocket_icon_wrapper">
        <img loading="lazy" src="https://uploads-ssl.webflow.com/62e1850820b4d5a0c61b3439/62e1850820b4d561c81b34c2_rocket.svg" alt="" class="icon-1x1-xsmall-2 is_signup rocket_icon">
        <img loading="lazy" src="https://uploads-ssl.webflow.com/62e1850820b4d5a0c61b3439/62e1850820b4d561c81b34c2_rocket.svg" alt="" class="icon-1x1-xsmall-2 is_signup rocket_icon">
      </div>
      <div class="plan_name_wrapper">
        <div class="text-size-medium big"> ${plan_value[0]} Mbps speeds</div>
        <div class="text-size-small bf">Early February Flash Sale</div>
        <div class="heading-small is_signup"><span>$</span>${parseInt(plan_value[1]) + 10} monthly</div>
      </div>
      <div class="price_wrapper">
        <div class="heading-xsmall is_accent"><span>$</span>${plan_value[1]} monthly</div>
      </div>
      <div class="speeds_wrapper">
        <div class="pricing19_feature-list is_signup">
          <div id="w-node-_43b618b4-ea91-88e5-8ef0-8320f81c339d-6e84bbe4" class="pricing19_feature unlimited">
            <div class="pricing19_feature-icon-wrapper">
              <img loading="lazy" src="https://uploads-ssl.webflow.com/62e1850820b4d5a0c61b3439/62e1850820b4d512db1b34da_infinity-solid.svg" alt="" class="icon-1x1-xsmall-2">
            </div>
            <div class="text-size-regular is_dark_blue">Unlimited usage</div>
          </div>
          <div id="w-node-_5f70bbb3-327a-443f-267e-f3743bd4b445-6e84bbe4" class="pricing19_feature down_speed">
            <div class="pricing19_feature-icon-wrapper is_white">
              <img loading="lazy" src="https://uploads-ssl.webflow.com/62e1850820b4d5a0c61b3439/62e1850820b4d526631b348e_circle-down-solid.svg" alt="Download speeds." class="icon-1x1-xsmall-2">
            </div>
            <div class="text-size-regular is_dark_blue">${plan_value[0]} Mbps download</div>
          </div>
          <div id="w-node-_5f70bbb3-327a-443f-267e-f3743bd4b44a-6e84bbe4" class="pricing19_feature up_speed">
            <div class="pricing19_feature-icon-wrapper">
              <img loading="lazy" src="https://uploads-ssl.webflow.com/62e1850820b4d5a0c61b3439/62e1850820b4d51b051b348d_circle-up-solid.svg" alt="Upload speeds." class="icon-1x1-xsmall-2">
            </div>
            <div class="text-size-regular is_dark_blue">${plan_text} Mbps upload</div>
          </div>
          <div id="w-node-ad6c0807-64f5-56bd-54dd-9550d3432d9b-6e84bbe4" class="pricing19_feature router_included">
            <div class="pricing19_feature-icon-wrapper">
              <img loading="lazy" src="https://uploads-ssl.webflow.com/62e1850820b4d5a0c61b3439/6366ce6076bc3838a2c50572_modem_icon.svg" alt="" class="icon-1x1-xsmall-2">
            </div>
            <div class="text-size-regular is_dark_blue">Free rental router & modem</div>
          </div>
          <div id="w-node-_7c80db0e-fc6d-559c-dcb4-cc9bd92ccf76-6e84bbe4" class="pricing19_feature no_contract">
            <div class="pricing19_feature-icon-wrapper">
              <img loading="lazy" src="https://uploads-ssl.webflow.com/62e1850820b4d5a0c61b3439/62e1850820b4d5c3f01b34dd_file-contract-solid.svg" alt="" class="icon-1x1-xsmall-2">
            </div>
            <div class="text-size-regular is_dark_blue">No contract</div>
          </div>
          <div class="text-size-small call">Just call us to change your internet speed at anytime.</div>
        </div>
      </div>
    </div>
    <div class="w-form-formradioinput w-form-formradioinput--inputType-custom plan_radio_button w-radio-input"></div>
    <input type="radio" id="radio" name="plans" value="45" data-name="plans" style="opacity:0;position:absolute;z-index:-1">
    <span class="radio-button-label w-form-label" for="radio">Radio</span>
  </label>`;


    jQuery('#plan_wrapper_id').append(Page1);

})


jQuery('#plan_wrapper_id .radio-button-field').on('click', function(){
jQuery('.radio-button-field .plan_box_outline').removeClass('redirected-checked')
  jQuery(this).find('.plan_box_outline').addClass('redirected-checked')
})

function totalappend(price){
    let pricevalue = '';
      if(price){
      pricevalue = price;
      }else{
         pricevalue = 0;
  }
let total = `<div class="monthly_payment_wrapper">
              <div class="text-size-small">
                 Monthly payment
              </div>
             <div class="price heading-xsmall">
                $ <span id="monthly_value_bottom" bloc="monthly_price">
                   ${pricevalue}
                  </span>
                </div>
              </div>`;
  
              let installation = `<div class="monthly_payment_wrapper">
              <div class="text-size-small">
              Free installation in
              </div>
              <div class="price heading-xsmall">
              <span bloc="install_time" class="install_time_text_span">
              3 to 5 days
              </span>
              </div>
              </div>`;
jQuery('.gform_page_footer').prepend(total + installation)
}
  
totalappend(0)

  jQuery("#input_3_23").on('change', function(){
  jQuery('.monthly_payment_wrapper').remove()
    let pricevalue = jQuery(this).val();
    totalappend(pricevalue)
})

   }); //post render 
});
