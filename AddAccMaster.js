import React from "react";
import "./AccMaster.css";

export const AddAccMaster = () => {
  return (
    <div className="container-fluid acc-ct ">
      <div className="Heading-top d-flex justify-content-center pt-2 pb-2">
        <h5 className="head-txt px-4"> Add Account Master</h5>
      </div>

      <div className="row pb-5">
        <div className="col-5">
          <div className="genral_info_box mb-5 pe-0">
            <form className="mb-4">
              <fieldset>
                <legend>General Info.</legend>
                <div className="row">
                  <div className="col-12 pt-0">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="inpt_box"
                      style={{
                        marginRight: "2px",
                        float: "right",
                        width: "400px",
                        height: "22px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    />
                    <br></br>
                  </div>
                  <div className="col-12 pt-0">
                    <label>(Alias)</label>
                    <input
                      type="text"
                      name="alias"
                      id="alias"
                      style={{
                        marginRight: "2px",
                        float: "right",
                        width: "400px",
                        height: "22px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    />
                    <br></br>
                  </div>
                  <div className="col-12 pt-0">
                    <label>Print Name</label>
                    <input
                      type="text"
                      name="print name"
                      id="name"
                      style={{
                        marginRight: "2px",
                        float: "right",
                        width: "400px",
                        height: "22px",
                        backgroundColor: "#000",
                        color: "#fff",
                      }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-3">
                        <label>Group</label>
                      </div>
                      <div className="col-4">
                        <p className="ps-0">
                          <b>Bank Accounts</b>
                        </p>
                      </div>
                      <div className="col-5"></div>


                    </div>
                  </div>

                  <div className="col-12">
                    <div className="row">

                      <div className="col-3">
                        <label>Op. Bal.</label>
                      </div>
                      <div className="col-3 d-flex justify-content-center">
                        <p>
                          <b>0.00</b>
                        </p>
                      </div>
                      <div className="col-3 d-flex justify-content-end">
                        <p>
                          <span className="rate">(Rs.) Dr/Cr</span>
                        </p>
                      </div>
                      <div className="col-3 ">
                        <p>
                          <b>D</b>
                        </p>
                      </div>
                      
                      <div className="col-3 ">
                        <label>Prev. Year Bal.</label>
                      </div>
                      <div className="col-3 d-flex justify-content-center">
                        <p>
                          <b>0.00</b>
                        </p>
                      </div>
                      <div className="col-3 d-flex justify-content-end">
                        <p>
                          <span className="rate">(Rs.) Dr/Cr</span>
                        </p>
                      </div>
                      <div className="col-3">
                        <p>
                          <b>D</b>
                        </p>
                      </div>

                    </div>
                  </div>
               
                    <div className="col-12">
                    <div className="row">
                        <div className="col-3"><label>Address</label></div>
                        <div className="col-9">
                            <textarea type='text' name='address' id='address' style={{width: '390px'}}/>
                        </div>
                  </div>
                      <div className="col-12">
                        <div className="row">
                            <div className="col-5">
                                <div className="row">
                                  <div className="col-6"> <label>Country</label></div> 
                                 <div className="col-6">   <p className="d-flex justify-content-center"><b>India</b></p></div>
                                </div>
                            </div>
                            <div className="col-4">
                            <div className="row">
                                  <div className="col-6"> <label className="d-flex justify-content-end">State/POS</label></div> 
                                 <div className="col-6">   <p className="d-flex justify-content-start"><b>Delhi</b></p></div>
                                </div>
                            </div>
                            <div className="col-3 ">
                                <div className="d-flex justify-content-center" >
                                <label>(Code : 07)</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 "><label >Type Of Dealer</label></div>
                            <div className="col-3"><input type="text" name="dealer" id="dealer" style={{height: '22px', width: '180px'}} /> </div>
                            <div className="col-6"></div>
                            <div className="col-3"><label>GSTIN/UIN</label></div>
                            <div className="col-3 "><input type="text" name="dealer" id="dealer" style={{height: '22px', width: '180px'}} /></div>
                            <div className="col-6">
                                <div className="d-flex justify-content-end ">
                                <button className="gtsin_btn px-3"><b>Validate GSTIN Online</b></button>
                                </div>
                            </div>
                        </div>
                      </div>
                         
                         <div className="col-12 mt-4 pe-0">
                            <div className="row pe-0">
                            <div className="col-3"><label>Aadhar No.</label></div>
                            <div className="col-3"><input type='num' name="aadhar" id="aadhar" style={{width: '150px' , height: '22px'}}/></div>
                            <div className="col-3"><label className="d-flex justify-content-center">TIN</label></div>
                            <div className="col-3 "><div className="d-flex justify-content-end"><input type="num" name="tin" id="tin"  style={{width: '150px' , height: '22px'}} className="pe-0" /></div></div>
                           
                            <div className="col-3"><label>IT PAN</label></div>
                            <div className="col-3"><input type='num' name="pan" id="pan" style={{width: '150px' , height: '22px'}}/></div>
                            <div className="col-3"><label className="d-flex justify-content-center ps-3">Ward</label></div>
                            <div className="col-3 "><div className="d-flex justify-content-end"><input type="text" name="ward" id="ward"  style={{width: '150px' , height: '22px'}} className="pe-0" /></div></div>
                            
                            <div className="col-3"><label>E-Mail</label></div>
                            <div className="col-9"><input type='email' name="email" id="email" style={{width: '390px' , height: '22px'}}/></div>
                           
                            <div className="col-3"><label>Mobile No.</label></div>
                            <div className="col-3"><input type='num' name="mobile" id="mobile" style={{width: '150px' , height: '22px'}}/></div>
                            <div className="col-3"><label className="d-flex justify-content-center ps-0">WhatsApp No.</label></div>
                            <div className="col-3 "><div className="d-flex justify-content-end"><input type="num" name="tin" id="tin"  style={{width: '150px' , height: '22px'}} className="pe-0" /></div></div>
                             <div className="col-6"></div>
                             <div className="col-6">
                                <p className="txt2">(Country code w/o'+,0'e.g.9199xxxxxx)</p>
                             </div>
                               <div className="col-3"> <label>Tel. No.</label></div>
                               <div className="col-3"><input type="num" name="tel" id="tel"  style={{width: '150px' , height: '22px'}} /></div>
                               <div className="col-3"><label  className="d-flex justify-content-center ps-0">Fax.</label></div>
                            <div className="col-3"><div className="d-flex justify-content-end"><input type='num' name="fax" id="fax" style={{width: '150px' , height: '22px'}}/></div></div>
                           
                               <div className="col-3"> <label>Contact Person</label></div>
                               <div className="col-3"><input type="num" name="Contact person" id="contact person"  style={{width: '150px' , height: '22px'}} /></div>
                               <div className="col-3"><label  className="d-flex justify-content-center ps-0">Transport</label></div>
                            <div className="col-3"><div className="d-flex justify-content-end"><input type='text' name="transport" id="transport" style={{width: '150px' , height: '22px'}}/></div></div>
                              
                               <div className="col-3"> <label>Station</label></div>
                               <div className="col-3"><input type="text" name="station" id="station"  style={{width: '150px' , height: '22px'}} /></div>
                               <div className="col-3"><label  className="d-flex justify-content-center ps-0">Pin Code</label></div>
                            <div className="col-3"><div className="d-flex justify-content-end"><input type='num' name="pin code" id="pin code" style={{width: '150px' , height: '22px'}}/></div></div>
                              
                               <div className="col-1"> <label>Distance</label></div>
                               <div className="col-3"><p className="d-flex justify-content-end"><b>0</b></p></div>
                               <div className="col-4"><div><button className="distance_btn"><b>Check Distance</b></button></div></div>
                            <div className="col-4"></div>
                              


                            </div>
                         
                         </div>
                    </div>
                 
                </div>
              </fieldset>
            </form>
          </div>

          <div className="row">
            <div className="col-12">
                <button className="note-btn px-3 mx-1"><b>Notes</b></button>
            <button className="note-btn px-2 mx-1"><b>Opt. Fields</b></button>
            <button className="note-btn px-3 mx-1"><b>Multiple Alias</b></button>
            <button className="Acc-btn px-3 mx-1"><b>Acc IMAGE</b></button>

            </div>
        
          </div>
        </div>

        <div className="col-5 ">
          <div className="other_info_box ps-0">
            <form >
              <fieldset>
                <legend>Other Info.</legend>
                 <div className="row top-box ">
                  <div className="col-12 ">

                    <div className="row mt-5 pt-5">
                        <div className="col-4">
                            <label>Specify Default Sale Type</label>
                        </div>
                        <div className="col-1"><p><b>N</b></p></div>
                        <div className="col-4"><p className="text-other">Default sale type</p></div>
                        <div className="col-3"><input type="text"  name="Dsale" id="dsale" style={{width: '110px', height: '22px',margingLeft: '0px'}} /></div>
                    
                        <div className="col-4">
                            <label>Specify Default Purc Type</label>
                        </div>
                        <div className="col-1"><p><b>N</b></p></div>
                        <div className="col-4"><p className="text-other">Default pure type</p></div>
                        <div className="col-3"><input type="text"  name="Dpure" id="dpure" style={{width: '110px', height: '22px',margingLeft: '0px'}} /></div>
                     
                        <div className="col-3">
                            <p className="text-other other-lbl-txt px-0">Freez Sale Type</p>
                        </div>
                        <div className="col-3"><input type="text"  name="Fsale" id="Fsale" style={{width: '110px', height: '22px',margingLeft: '0px'}} /></div>
                        
                        <div className="col-3 other-lbl-txt  px-0"><p className="text-other">Default Pure Type</p></div>
                        <div className="col-3"><input type="text"  name="Fpure" id="Fpure" style={{width: '110px', height: '22px',margingLeft: '0px'}} className="ps-0"/></div>
                        
                        </div>

                        <div className="row mt-3">
                            <div className="col-3">
                                <label>CST No.</label>
                            </div>
                            <div className="col-3"><input type="text" name="cst" id="cst"  style={{width: '110px', height: '22px',margingLeft: '0px'}}/></div>
                            <div className="col-3"><label>LST No.</label></div>
                            <div className="col-3"><input type="text" name="lst" id="lst"  style={{width: '110px', height: '22px',margingLeft: '0px'}}/></div>
                       
                       
                            <div className="col-3">
                                <label className="other-lbl-txt text-other">Service Tax No.</label>
                            </div>
                            <div className="col-3"><input type="text" name="service-tax" id="service-tax"  style={{width: '110px', height: '22px',margingLeft: '0px'}}/></div>
                            <div className="col-3"><label className="other-lbl-txt text-other"  >LBT No.</label></div>
                            <div className="col-3"><input type="text" name="lbt" id="lbt"  style={{width: '110px', height: '22px',margingLeft: '0px'}}/></div>
                       
                       
                        </div>
                  </div>
                        

                        <div className="col-12">

                            <div className="row mt-5 pt-5 mb-5 pb-4">
                                <div className="col-3"><label>Bank Name</label></div>
                                <div className="col-9"><input type="text" name="bankName" id="bankName" style={{width: '383px', height: '22px'}}/></div>
                            
                                <div className="col-3"><label>Bank Acc No.</label></div>
                                <div className="col-9"><input type="num" name="bankAcc" id="bankAcc" style={{width: '383px', height: '22px'}}/></div>
                            
                            
                                <div className="col-3"><label>IFSC Code</label></div>
                                <div className="col-9"><input type="text" name="bankAcc" id="bankAcc" style={{width: '383px',height: '22px'}}/></div>
                            
                            </div>
                        </div>

                        <div className="col-12 mb-5 pb-5">
                             <div className="row">
                             <div className="col-3">
                            <p className="text-other other-lbl-txt px-0">Enable Email Query</p>
                        </div>
                        <div className="col-3"><input type="text"  name="emailQuery" id="emailQuery" style={{width: '110px', height: '22px',margingLeft: '0px'}} /></div>
                        
                        <div className="col-3 other-lbl-txt  px-0"><p className="text-other">Enable Sms Query</p></div>
                        <div className="col-3"><input type="text"  name="smsQuery" id="smsQuery" style={{width: '110px', height: '22px',margingLeft: '0px'}} className="ps-0"/></div>
                        
                             </div>
                        </div>

                 </div>
                  
                  
              </fieldset>
            </form>
          
          </div>
          <div className="row mt-5">
                    <div className="col-6"></div>
                    
                    <div className="col-6 d-flex justify-content-end  "><button className="px-4 save-btn">Save</button>
                    <button className="px-4 ms-2 quit-btn">Quit</button></div>
                  </div>
        </div>

        <div className="col-2 ">
          <div className="info_box">
            <form>
              <fieldset>
                <legend>Extra Info.</legend>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
