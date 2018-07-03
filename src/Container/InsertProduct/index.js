import React, { Component } from 'react';
import {  Tabs, Tab, Row,Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom';
import Config from '../../Config';
import DatePicker from 'react-date-picker';

class InsertProduct extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            actionkey: 1,
            start_availability_date: new Date(),
            end_availability_date: new Date(),
        };
    }

    setStartDate = start_availability_date => this.setState({ start_availability_date });
    setEndDate = end_availability_date => this.setState({ end_availability_date });

    handleSelect(actionkey) {
        alert(`selected ${actionkey}`);
        this.setState({ actionkey });
    }

    componentDidMount() {
        document.title = Config.name + ' - Manage Product';
    }


    render() {
        // return <div ><ProductForm {...this.state} {...this.props} handleclick={this.handleSelect}/></div>;
        return (
            <form id="productinsert_form">
                <div className="step_3main">
                    <div className="step_3main_detailsform">
                        <Tabs
                            activeKey={this.state.key}
                            onSelect={this.handleSelect}
                            id="step3_tab" 
                        >
                            <Tab eventKey={1} title="1. Basic Data" tabClassName="bdata">
                                <div id="s3_tab1">
                                    <div className="container-fluid">
                                        <Row>
                                            <Col xs={12} md={3}>
                                                <div className="pdform_column last_coumn preview_product_image">
                                                    <div className="preview_title">
                                                        <p>Preview</p>
                                                    </div>
                                                    <div className="preview_img">
                                                        <img src="assets/images/default.png" alt="Img" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={6} md={5}>
                                                <div className="pdform_column first_coumn">
                                                    <Row>
                                                        <Col sm={6}>
                                                            <div className="form-group">
                                                                <label>Category</label>
                                                                <Field className="form-control hsmall arrow" name="category_name" id="category_main" component="select">
                                                                    <option value="">Select Category</option>
                                                                </Field>
                                                            </div>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="form-group">
                                                                <label>Sub-Category</label>
                                                                <Field className="form-control hsmall arrow" name="sub_category_name" id="sub_category" component="select">
                                                                </Field>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="form-group hide">
                                                        <label>New Category</label>
                                                        <Field name="main_category_other" component="input" type="text" id="other_main_Category" className="form-control hsmall" />
                                                    </div>
                                                    <div className="form-group hide">
                                                        <label>New Sub Category</label>
                                                        <Field name="sub_category_other" component="input" type="text" id="other_sub_Category" className="form-control hsmall" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Market</label>
                                                        <Field className="form-control hsmall arrow" name="market_name" id="target_market" component="select">
                                                        </Field>
                                                    </div>
                                                    <div className="form-group hide">
                                                        <label>New Market</label>
                                                        <Field name="other_target_market" component="input" type="text" id="target_market_other" className="form-control hsmall" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Brand Name</label>
                                                        <Field name="brand_name" component="input" type="text" id="brandname" className="form-control hsmall" />
                                                    </div>
                                                    <div className="form-group ">
                                                        <label>Sub Brand</label>
                                                        <Field name="sub_brand_name" component="input" type="text" id="subbrandname" className="form-control hsmall" />
                                                    </div>
                                                    <div className="form-group {{ $errors->has('functional_name') ? ' has-error' : '' }}">
                                                        <label>Functional Name</label>
                                                        <Field name="functional_name" component="input" type="text" id="functionalname" className="form-control hsmall" />
                                                    </div>
                                                    <div className="form-group {{ $errors->has('net_content') ? ' has-error' : '' }}">
                                                        <label>Variant</label>
                                                        <Field name="variant_name" component="input" type="text" id="variant" className="form-control hsmall" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xs={12} sm={6} md={4}>
                                                <div className="pdform_column second_coumn">
                                                    <Row>
                                                        <Col sm={6}>
                                                            <div className="form-group">
                                                                <label>Net Content</label>
                                                                <Field name="net_content" component="input" type="text" id="netcontent" className="form-control hsmall" />
                                                            </div>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="form-group">
                                                                <label>UOM</label>
                                                                <Field name="uom" component="select" id="uom" className="form-control hsmall">
                                                                </Field>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col sm={6}>
                                                            <div className="form-group">
                                                                <label>Start Availablity Date</label>
                                                                <DatePicker name="start_availability_date" id="dp1" onChange={this.setStartDate} value={this.state.start_availability_date}/>
                                                            </div>
                                                        </Col>
                                                        <Col sm={6}>
                                                        <div className="form-group">
                                                            <label>End Availablity Date</label>
                                                            <DatePicker name="end_availability_date" id="dp2" onChange={this.setEndDate} value={this.state.end_availability_date}/>
                                                        </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="form-group">
                                                        <label>Product Name</label>
                                                        <Field name="short_description" component="textarea" id="productname" className="form-control" disabled/>
                                                    </div>

                                                    <Row>
                                                        <Col sm={6}>
                                                            <div className="form-group">
                                                                <label>Shelf Life in Days</label>
                                                                <Field name="shelf_line_days" component="input" type="text" id="shelf_line_days" className="form-control hsmall" />
                                                            </div>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="form-group">
                                                                <label>Date on Packaging</label>
                                                                <Field className="form-control hsmall arrow" name="date_of_packaging" id="date_of_packaging" component="select">
                                                                    <option value="">Select Package</option> 
                                                                    <option value="Best Before">Best Before</option>
                                                                </Field>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="form-group">
                                                        <label>Country of Origin</label>
                                                        <Field className="form-control hsmall arrow" name="country_origin" id="country_origin" component="select">
                                                            <option value="">Select Country</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="pdetails_btform">
                                        <div className="container-fluid">
                                            <Row>
                                                <Col xs={12} sm={8}>
                                                    <div className="bdata_cunit">
                                                        <Tabs id="step3_innertab">
                                                            <Tab eventKey={1} title="Consumer Unit">
                                                                <div className="cunitform">
                                                                    <Row>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group">
                                                                                <label>GTIN</label>
                                                                                <Field name="cu_gtin_code" component="input" type="text" id="cu_gtin_code" maxlength="16" className="form-control" />
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group">
                                                                                <label>SKU#</label>
                                                                                <Field name="cu_sku" component="input" type="text" id="cu_sku" className="form-control" />
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group nolabel">
                                                                                <div className="inline-checkbox tick">
                                                                                    <Field name="cu_dispatch_unit" id="dunit" component="input" type="checkbox" value="1"/>
                                                                                    <label for="dunit">Dispatch Unit</label>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group nolabel">
                                                                                <div className="inline-checkbox tick">
                                                                                    <Field name="cu_consumer_unit" id="cunit" component="input" type="checkbox" value="1"/>
                                                                                    <label for="cunit">Consumer Unit</label>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group">
                                                                                <label>Quantity of next level</label>
                                                                                <Field name="cu_quantityof_level" component="input" type="text" id="cu_quantityof_level" className="form-control" />
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group">
                                                                                <label>Packaging type</label>
                                                                                <Field name="cu_packaging_type" component="select"  id="cu_packaging_type" className="form-control hsmall arrow" >
                                                                                    <option value="">Select Packaging Type</option>
                                                                                </Field>
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group nolabel">
                                                                                <div className="inline-checkbox tick">
                                                                                    <Field name="cu_invoice_unit" id="inunit" component="input" type="checkbox" value="1"/>
                                                                                    <label for="inunit">Invoice Unit</label>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                        <Col xs={12} sm={6} md={3}>
                                                                            <div className="form-group nolabel">
                                                                                <div className="inline-checkbox tick">
                                                                                    <Field name="cu_order_unit" id="ounit" component="input" type="checkbox" value="1"/>
                                                                                    <label for="ounit">Order Unit</label>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col xs={12} sm={6}>
                                                                            <Row>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>Height</label>
                                                                                        <Field name="cu_height" component="input" type="text" id="cu_height" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>Width</label>
                                                                                        <Field name="cu_width" component="input" type="text" id="cu_width" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>Length</label>
                                                                                        <Field name="cu_length" component="input" type="text" id="cu_length" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>UOM</label>
                                                                                        <Field name="cu_productatt_uom" component="input" type="text" id="cu_productatt_uom" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                        <Col xs={12} sm={6}>
                                                                            <div className="form-group nolabel">
                                                                                <div className="inline-checkbox tick">
                                                                                    <Field name="cu_pmr" id="pmr" component="input" type="checkbox" value="1"/>
                                                                                    <label for="pmr">Packaging Marked Returnable</label>
                                                                                </div>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row>
                                                                        <Col xs={12} sm={6}>
                                                                            <Row>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>Gross Weight</label>
                                                                                        <Field name="cu_gross_weight" component="input" type="text" id="cu_gross_weight" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>Packaging Weight</label>
                                                                                        <Field name="cu_packaging_weight" component="input" type="text" id="cu_packaging_weight" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>Net Weight</label>
                                                                                        <Field name="cu_net_weight" component="input" type="text" id="cu_net_weight" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                                <Col xs={12} sm={6} md={3}>
                                                                                    <div className="form-group">
                                                                                        <label>UOM</label>
                                                                                        <Field name="cu_weighting_uom" component="input" type="text" id="cu_weighting_uom" className="form-control" />
                                                                                    </div>
                                                                                </Col>
                                                                            </Row>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Tab>
                                                            <Tab eventKey={2} title="Shrink">
                                                                Tab 2 content
                                                            </Tab>
                                                            <Tab eventKey={3} title="Case">
                                                                Tab 3 content
                                                            </Tab>
                                                            <Tab eventKey={4} title="Pallet">
                                                                Tab 4 content
                                                            </Tab>
                                                        </Tabs>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>    
                                </div>
                            </Tab>
                            <Tab eventKey={2} title="2. Enriched Content" tabClassName="encontent">
                                2. Enriched Content3
                            </Tab>
                            <Tab eventKey={3} title="3. Images" tabClassName="imgs">
                                3. Images
                            </Tab>
                            <Tab eventKey={4} title="4. Product Review" tabClassName="pdrevw">
                                4. Product Review
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'ProductForm',
})(InsertProduct);




