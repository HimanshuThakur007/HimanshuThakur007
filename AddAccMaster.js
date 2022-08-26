import React from "react";
import "./AddAccountMaster.css";
import { useState } from "react";

const AddAccountMaster = () => {
  const [Name, setName] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <>
      <div className="container-fluid acc-ct ">
        <div className="Heading-top d-flex justify-content-center pt-2 pb-2">
          <h5 className="head-txt px-4"> Add Account Master</h5>
        </div>

        <div className="row pb-5">
          {/* col-5 start..! */}
          <div className="col-5">
            {/* General Info Box...! */}
            <div className="genral_info_box mb-5 ps-0">
              <form className="mb-4">
                <fieldset className="border p-2">
                  <legend className="float-none w-auto p-2">
                    General Info.
                  </legend>
                  <div className="row">
                    <div className="col-12 pt-0">
                      <label>Name</label>
                      <input
                        value={Name}
                        onChange={nameHandler}
                        type="text"
                        name="name"
                        id="name"
                      />
                      <br></br>
                    </div>
                    <div className="col-12 pt-0">
                      <label>(Alias)</label>
                      <input type="text" name="alias" id="name" />
                      <br></br>
                    </div>
                    <div className="col-12 pt-0">
                      <label>Print Name</label>
                      <input type="text" name="printName" id="name" />
                    </div>
                    <div className="col-12 pt-0">
                      <label>Group</label>
                      <input type="text" name="GroupName" id="name" />
                    </div>

                    <div className="col-12 pt-0">
                      <div className="row">
                        <div className="col-3">
                          <label>Op. Bal.</label>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                          <input
                            type="opBal"
                            name="OpBal"
                            id="opBal"
                            placeholder="0.00"
                          />
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                          <label className="dr">(Rs.) Dr/Cr</label>
                        </div>
                        <div className="col-3 ">
                          <input
                            type="Dr"
                            name="Dr-Cr"
                            id="Dr"
                            placeholder="D"
                          />
                        </div>

                        <div className="col-3 ">
                          <label>Prev. Year Bal.</label>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                          <input
                            type="text"
                            name="PrevBal"
                            id="opBal"
                            placeholder="0.00"
                          />
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                          <label className="dr">(Rs.) Dr/Cr</label>
                        </div>
                        <div className="col-3 ">
                          <input
                            type="text"
                            name="Dr-Cr"
                            id="Dr"
                            placeholder="D"
                          />
                        </div>
                        <div className="col-12 pt-0">
                          <label>Address</label>
                          <textarea
                            type="Address"
                            name="Address"
                            id="Address"
                          />
                        </div>
                      </div>

                      <div className="col-12 pt-0">
                        <div className="row">
                          <div className="col-5">
                            <div className="row">
                              <div className="col-6">
                                {" "}
                                <label className="country">Country</label>
                              </div>
                              <div className="col-6 d-flex justify-content-end">
                                <input
                                  type="text"
                                  name="country"
                                  id="country"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="row">
                              <div className="col-6">
                                {" "}
                                <label className="d-flex justify-content-end">
                                  State/POS
                                </label>
                              </div>
                              <div className="col-6 d-flex justify-content-end">
                                <input type="text" name="state" id="state" />
                              </div>
                            </div>
                          </div>
                          <div className="col-3 ">
                            <div className="d-flex justify-content-center">
                              <label className="stateCode">(Code : 07)</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 pt-0"></div>
                        <div className="row">
                          <div className="col-3 ">
                            <label>Type Of Dealer</label>
                          </div>
                          <div className="col-3">
                            <input type="text" name="dealer" id="dealer" />{" "}
                          </div>
                          <div className="col-6"></div>
                          <div className="col-3">
                            <label>GSTIN/UIN</label>
                          </div>
                          <div className="col-3 ">
                            <input type="text" name="dealer" id="dealer" />
                          </div>
                          <div className="col-6">
                            <div className="d-flex justify-content-end ">
                              <button className="gtsin_btn px-3">
                                <b>Validate GSTIN Online</b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-12 mt-4 pe-0">
                        <div className="row pe-0">
                          <div className="col-3">
                            <label>Aadhar No.</label>
                          </div>
                          <div className="col-3">
                            <input type="num" name="aadhar" id="aadhar" />
                          </div>
                          <div className="col-3">
                            <label className="d-flex justify-content-center">
                              TIN
                            </label>
                          </div>
                          <div className="col-3 ">
                            <div className="d-flex justify-content-end">
                              <input type="num" name="tin" id="tin" />
                            </div>
                          </div>

                          <div className="col-3">
                            <label>IT PAN</label>
                          </div>
                          <div className="col-3">
                            <input type="num" name="pan" id="aadhar" />
                          </div>
                          <div className="col-3">
                            <label className="d-flex justify-content-center ps-3">
                              Ward
                            </label>
                          </div>
                          <div className="col-3 ">
                            <div className="d-flex justify-content-end">
                              <input type="text" name="ward" id="tin" />
                            </div>
                          </div>

                          <div className="col-3">
                            <label>E-Mail</label>
                          </div>
                          <div className="col-9">
                            <input type="email" name="email" id="email" />
                          </div>

                          <div className="col-3">
                            <label>Mobile No.</label>
                          </div>
                          <div className="col-3">
                            <input type="num" name="mobile" id="mobile" />
                          </div>
                          <div className="col-3">
                            <label className="d-flex justify-content-center ps-0">
                              WhatsApp No.
                            </label>
                          </div>
                          <div className="col-3 ">
                            <div className="d-flex justify-content-end">
                              <input type="num" name="whatsaap" id="mobile" />
                            </div>
                          </div>
                          <div className="col-6"></div>
                          <div className="col-6">
                            <p className="txt2">
                              (Country code w/o'+,0'e.g.9199xxxxxx)
                            </p>
                          </div>
                          <div className="col-3">
                            {" "}
                            <label>Tel. No.</label>
                          </div>
                          <div className="col-3">
                            <input type="num" name="tel" id="tel" />
                          </div>
                          <div className="col-3">
                            <label className="d-flex justify-content-center ps-0 fax">
                              Fax.
                            </label>
                          </div>
                          <div className="col-3">
                            <div className="d-flex justify-content-end">
                              <input type="text" name="fax" id="fax" />
                            </div>
                          </div>

                          <div className="col-3">
                            {" "}
                            <label>Contact Person</label>
                          </div>
                          <div className="col-3">
                            <input type="num" name="Contact person" id="tel" />
                          </div>
                          <div className="col-3">
                            <label className="d-flex justify-content-center ps-0">
                              Transport
                            </label>
                          </div>
                          <div className="col-3">
                            <div className="d-flex justify-content-end">
                              <input type="text" name="transport" id="fax" />
                            </div>
                          </div>

                          <div className="col-3">
                            {" "}
                            <label>Station</label>
                          </div>
                          <div className="col-3">
                            <input type="text" name="station" id="tel" />
                          </div>
                          <div className="col-3">
                            <label className="d-flex justify-content-center ps-0">
                              Pin Code
                            </label>
                          </div>
                          <div className="col-3">
                            <div className="d-flex justify-content-end">
                              <input type="num" name="pin code" id="fax" />
                            </div>
                          </div>

                          <div className="col-1">
                            {" "}
                            <label>Distance</label>
                          </div>
                          <div className="col-3 d-flex justify-content-end">
                            <input
                              type="num"
                              placeholder="0"
                              name="Distance"
                              id="Distance"
                            />
                          </div>
                          <div className="col-4">
                            <div>
                              <button className="distance_btn">
                                <b>Check Distance</b>
                              </button>
                            </div>
                          </div>
                          <div className="col-4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            {/* General Info Box End..! */}
           
            <div className="row">
              <div className="col-12">
                <button className="note-btn px-3 mx-1">
                  <b>Notes</b>
                </button>
                <button className="note-btn px-2 mx-1">
                  <b>Opt. Fields</b>
                </button>
                <button className="note-btn px-3 mx-1">
                  <b>Multiple Alias</b>
                </button>
                <button className="Acc-btn px-3 mx-1">
                  <b>Acc IMAGE</b>
                </button>
              </div>
            </div>
          </div>
          {/* col-5 end..! */}

          <div className="col-5 ">
            {/* Other Info Box start..! */}
            <div className="other_info_box mb-5 ps-0">
              <form>
                <fieldset className="border p-2">
                  <legend legend className="float-none w-auto p-2">
                    Other Info.
                  </legend>
                  <div className="row top-box ">
                    <div className="col-12 ">
                      <div className="row mt-5 pt-5">
                        <div className="col-4">
                          <label>Specify Default Sale Type</label>
                        </div>
                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="N"
                            name="SDsale"
                            id="specifyType"
                          />
                        </div>
                        <div className="col-4">
                          <label className="text-other">
                            Default sale type
                          </label>
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            name="Dsale"
                            id="defaultType"
                          />
                        </div>

                        <div className="col-4">
                          <label>Specify Default Purc Type</label>
                        </div>
                        <div className="col-1">
                          <input
                            type="text"
                            placeholder="N"
                            name="Sdpurc"
                            id="specifyType"
                          />
                        </div>
                        <div className="col-4">
                          <label className="text-other">
                            Default pure type
                          </label>
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            name="Dpure"
                            id="defaultType"
                          />
                        </div>

                        <div className="col-4">
                          <label className="text-other">Freeze Sale Type</label>
                        </div>
                        <div className="col-1">
                          <input
                            type="text"
                            name="SDsale"
                            id="specifyType"
                          />
                        </div>
                        <div className="col-4">
                          <label className="text-other">
                            Freeze Purc. Type
                          </label>
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            name="Dsale"
                            id="defaultType"
                            />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-3">
                          <label>CST No.</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            name="cst"
                            id="cst"
                          />
                        </div>
                        <div className="col-3">
                          <label>LST No.</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="text"
                            name="lst"
                            id="lst"
                            />
                        </div>

                        <div className="col-3">
                          <label className="other-lbl-txt textLink">
                            Service Tax No.
                          </label>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3">
                          <label className="other-lbl-txt textLink">
                            LBT No.
                          </label>
                        </div>
                        
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row mt-5 pt-5 mb-5 pb-4">
                        <div className="col-3">
                          <label>Bank Name</label>
                        </div>
                        <div className="col-9">
                          <input
                            type="text"
                            name="bankName"
                            id="Bank"
                            />
                        </div>

                        <div className="col-3">
                          <label>Bank Acc No.</label>
                        </div>
                        <div className="col-9">
                          <input
                            type="num"
                            name="bankAcc"
                            id="Bank"
                            />
                        </div>

                        <div className="col-3">
                          <label>IFSC Code</label>
                        </div>
                        <div className="col-9">
                          <input
                            type="text"
                            name="bankAcc"
                            id="Bank"
                            />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 mb-5 pb-5">
                      <div className="row">
                        <div className="col-3">
                          <p className="textLink other-lbl-txt px-0">
                            Enable Email Query
                          </p>
                        </div>
                        <div className="col-3"></div>

                        <div className="col-3 other-lbl-txt  px-0">
                          <p className="textLink">Enable Sms Query</p>
                        </div>
                        <div className="col-3"></div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            {/* Other Info Box End..! */}
            <div className="row mt-5">
              <div className="col-6"></div>

              {/* eslint-disable-next-line no-undef */}
              <div className="col-6 d-flex justify-content-end  ">
                <button className="px-4 save-btn">Save</button>
                <button className="px-4 ms-2 quit-btn">Quit</button>
              </div>
            </div>
          </div>

          <div className="col-2 ">
            <div className="info_box">
              <form>
                <fieldset className="border p-2 extra">
                  <legend legend className="float-none w-auto p-2">Extra Info.</legend>
                  <textarea type="text" name = "ExtraInfo" id="extraInfo"/>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAccountMaster;
