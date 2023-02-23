<?php
function returnValue($value){
  $values = explode('|', $value);
  return $values[0];
}
function returnprice($value){
  $values = explode('|', $value);
  return $values[1];
}
?>
<div  class="accordion-item">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
       <div class="summery-heading text-size-medium accent">
         <p>Total due today</p>
         <p>$<?php echo $entry['23'] ?></p>
       </div>
       <div class="summery-body">
        <?php 
        ?>
        <div class="single-item-row"> 
         <div class="single-itme-col internet-home">
           <p>Home Internet <?php echo returnValue($entry['12']); ?></p>
         </div>
         <div class="single-itme-col">
           <p>$<?php echo returnprice($entry['12']); ?></p>
         </div>
       </div>
       <?php if(returnprice($entry['19']) != 0): ?>
         <div class="single-item-row"> 
           <div class="single-itme-col phone-home">
             <p><?php echo returnValue($entry['19']); ?></p>
           </div>
           <div class="single-itme-col">
             <p>$<?php echo returnprice($entry['19']); ?></p>
           </div>
         </div>
       <?php endif; ?>
       <?php if(returnprice($entry['16']) != 0): ?>
         <div class="single-item-row"> 
           <div class="single-itme-col tv-home">
             <p><?php echo returnValue($entry['16']); ?></p>
           </div>
           <div class="single-itme-col">
             <p>$<?php echo returnprice($entry['16']); ?></p>
           </div>
         </div>
       <?php endif; ?>
       <?php if(returnValue($entry['58']) != ""): ?>
         <div class="single-item-row"> 
           <div class="single-itme-col purchase-home">
             <p>Purchase - ATA</p>
           </div>
           <div class="single-itme-col ">
             <p>$<?php echo returnprice($entry['58']); ?></p>
           </div>
         </div>
       <?php endif; ?>
       <?php  if (returnValue($entry['13']) == "Rent a modem & mesh router"): ?>
         <div class="single-item-row"> 
           <div class="single-itme-col modem-home">
             <p><?php echo returnValue($entry['13']); ?></p>
           </div>
           <div class="single-itme-col">
             <p>Free</p>
           </div>
         </div>
       <?php endif; ?>
       <div class="single-item-row"> 
         <div class="single-itme-col activation-home">
           <p>Express activation</p>
         </div>
         <div class="single-itme-col">
           <p>Free</p>
         </div>
       </div>
       <?php  if (returnValue($entry['13']) == "Rent a modem & mesh router"): ?>
         <div class="single-item-row"> 
           <div class="single-itme-col freeshipping-home">
             <p>Fast, contact-free shipping</p>
           </div>
           <div class="single-itme-col">
             <p>Free</p>
           </div>
         </div>
       <?php endif; ?>
     </div>
     <div class="summery-footer text-size-medium">
       <p>Total due now</p>
       <p>$<?php echo $entry['23'] ?></p>
     </div>
   </div>
 </div>
</div>
</div>