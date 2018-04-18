import React, { Component, PropTypes } from 'react';
import {
    Alert, Form, FormGroup, ControlLabel,
    Button, FormControl, Checkbox, Radio, ListGroup, ListGroupItem
} from 'react-bootstrap';

class MortForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getMunicipios = this.getMunicipios.bind(this);
    this.state.horas = ['01', '02', '03', '04', '05'];
	this.state.minutos = ['00', '01' , '02', '03', '04']
  }

  componentWillMount() {
    this.props.getDepartamentos();
    this.props.getEstablecimientos();
    this.props.getClasePartos();
    this.props.getTipoDocumentos();
    this.props.getLocalPartos();
  }

  getMunicipios(event) {
    this.props.getMunicipios(event.target.value);
  }

  render() {
    return (
        <div className="container-fluid">
                <h1>Código Único</h1>
                <Form inline>
                    <ListGroup>
                        <ListGroupItem>
                            <FormGroup controlId="formInlineName" >
                                <div className="bg-form">
                                    <ControlLabel>Establecimiento:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="" defaultValue disabled>Seleccione establecimiento</option>
                                        {this.props.establecimientos.map(establecimiento =>
                                        <option key={establecimiento.id} value={establecimiento.id}> {establecimiento.nombre} </option>
                                    )}
                                    </FormControl>
                                    {' '}
                                    <Checkbox checked>
                                        Fosalud
                        </Checkbox>
                                </div>

                            </FormGroup>

                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel>Local Parto:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select" defaultValue="-1">
                                        <option value="-1">Selecciona un local</option>
                                        {this.props.localPartos.map(localParto =>
                                          <option key={localParto.id} value={localParto.id}> {localParto.nombre} </option>
                                        )}
                                    </FormControl>
                                    {' '}
                                    <ControlLabel>Comunitario asistido por:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                </div>
                            </FormGroup>{' '}

                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel>Expediente de la madre:</ControlLabel>{'     '}
                                    <FormControl type="text" />  {' '}
                                    <ControlLabel>Plantar:</ControlLabel>{'     '}
                                    <FormControl type="text" />  {' '}
                                    <ControlLabel>Exclusivo ISSS > Formulario:</ControlLabel>{'     '}
                                    <FormControl type="text" />
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel>Expediente RN:</ControlLabel>{'     '}
                                    <FormControl type="text" />
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel>Nombres:</ControlLabel>{'     '}
                                    <FormControl type="text" className="input-full" />
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >Apellidos:</ControlLabel>{'     '}
                                    <FormControl type="text" className="input-full" />
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >Sexo:</ControlLabel>{'     '}
                                    <Radio name="radioGroup" >
                                        Femenino
                            </Radio> {'     '}
							<Radio name="radioGroup" >
                                        Masculino
                            </Radio>

                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <Alert bsStyle="warning">
                                        Digitar la Fecha de Nacimiento hasta estar completamente seguro de la información,
                  ya que el Codigo Unico sera generado a partir de este campo, por lo tanto,
                  una vez registrado el nacimiento no sera posible modificar esa fecha, ni tampoco eliminarlo
                            </Alert>
                                    <ControlLabel >Nacimiento:</ControlLabel>{'     '}
                                    <ControlLabel >Fecha:</ControlLabel>
                                    <FormControl type="date" className="input-full" />{'     '}
                                    <ControlLabel >Hora:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select" defaultValue disabled>Hora</option>
                                        { this.state.horas.map((hora, index) =>
                                           <option key={index} value={index}> {hora} </option>
                                          )
                                        }
                                    </FormControl> {'     '} hrs{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select" defaultValue disabled>Minuto</option>
                                        { this.state.minutos.map((minuto, index) =>
                                           <option key={index} value={index}> {minuto} </option>
                                          )
                                        }
                                    </FormControl> {'     '} min

                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >Peso:</ControlLabel>{'     '}
                                    <FormControl type="text" />{'     '} gr {'     '}
                                    <ControlLabel >Longitud:</ControlLabel>{'     '}
                                    <FormControl type="text" /> {'     '} cm {'     '}
                                    <ControlLabel >Per. Cef.:</ControlLabel>{'     '}
                                    <FormControl type="text" /> {'     '} cm {'     '}
                                    <ControlLabel >Amenorrea:</ControlLabel>{'     '}
                                    <FormControl type="text" /> {'     '}semanas {'     '}
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >Vía de evacuación:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                    {' '}
                                    <ControlLabel >Clase de Parto:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="" defaultValue disabled>Seleccione clase de parto</option>
                                        {this.props.clasePartos.map(claseParto =>
                                          <option key={claseParto.id} value={claseParto.id}> {claseParto.nombre} </option>
                                        )}
                                    </FormControl>
                                    {' '}
                                </div>
                            </FormGroup>{' '}
                        </ListGroupItem>
                        <ListGroupItem header="Aplicación de Vacunas" active></ListGroupItem>
                        <ListGroupItem>
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >BCG:</ControlLabel>{' '}{' '}{' '}
                                    <Checkbox></Checkbox>{' '}{' '}
                                    <ControlLabel >Fecha:</ControlLabel>
                                    <FormControl type="date" className="input-full" />
                                    <br />
                                    <ControlLabel >No se aplicó debido:</ControlLabel>{' '}{' '}{' '}
                                    <Checkbox>Bajo Peso</Checkbox>{' '}{' '}
                                    <Checkbox>Morbilidad</Checkbox>{' '}{' '}
                                    <Checkbox>Expuesto Perinatalmente</Checkbox>{' '}{' '}
                                    <Checkbox>Desabastecimiento</Checkbox>{' '}{' '}
                                    <Checkbox>Falleció</Checkbox>{' '}{' '}
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >Hepatitis B:</ControlLabel>{' '}{' '}{' '}
                                    <Checkbox></Checkbox>{' '}{' '}
                                    <ControlLabel >Fecha:</ControlLabel>
                                    <FormControl type="date" className="input-full" />
                                    <br />
                                    <ControlLabel >No se aplicó debido:</ControlLabel>{' '}{' '}{' '}
                                    <Checkbox>Morbilidad</Checkbox>{' '}{' '}
                                    <Checkbox>Desabastecimiento</Checkbox>{' '}{' '}
                                    <Checkbox>Falleció</Checkbox>{' '}{' '}
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName" >
                                <div className="bg-form">
                                    <ControlLabel>Retorno:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                    {' '}
                                </div>

                            </FormGroup>
                        </ListGroupItem>
                        <ListGroupItem header="Información de la madre" bsStyle="danger"></ListGroupItem>
                        <ListGroupItem>
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel>Nombres:</ControlLabel>{'     '}
                                    <FormControl type="text" className="input-full" />
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >Apellidos:</ControlLabel>{'     '}
                                    <FormControl type="text" className="input-full" />
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName">
                                <div className="bg-form">
                                    <ControlLabel >Edad:</ControlLabel>{'     '}

                                    <FormControl type="number" /> años
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName" >
                                <div className="bg-form">
                                    <ControlLabel >Dirección:</ControlLabel>{'     '}
                                    <FormControl componentClass="textarea" />
                                </div>
                            </FormGroup>{' '}
                            <FormGroup controlId="formInlineName" >
                                <div className="bg-form">
                                    <ControlLabel>Depto/ Municipio: </ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select" onChange={this.getMunicipios} defaultValue="-1">
                                        <option value="-1" disabled>Seleccione Departamento</option>
                                        {this.props.departamentos.map(depto => <option key={depto.id} value={depto.id}> {depto.nombre}</option>)}
                                    </FormControl>{' '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="" defaultValue unselectable>Selecciona Municipio</option>
                                        {this.props.municipios.map(mun => <option key={mun.id} value={mun.id}> {mun.nombre}</option>)}
                                    </FormControl>
                                    {' '}
                                </div>

                            </FormGroup>
                            <FormGroup controlId="formInlineName" >
                                <div className="bg-form">
                                    <ControlLabel>Canton:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>{' '}
                                    <Checkbox>Area</Checkbox>{' '}{' '}
                                    {' '}
                                </div>

                            </FormGroup>
                            <FormGroup controlId="formInlineName" >
                                <div className="bg-form">
                                    <ControlLabel>Aplicación de Vacuna Tdpa:</ControlLabel>{'     '}
                                    <Checkbox></Checkbox>{' '}{' '}
                                    <ControlLabel>Fecha:</ControlLabel>{'     '}
                                    <FormControl type="date" />{' '}
                                    <ControlLabel>Aplicación de Vacuna Influenza:</ControlLabel>{'     '}
                                    <Checkbox></Checkbox>{' '}{' '}
                                    <ControlLabel>Fecha:</ControlLabel>{'     '}
                                    <FormControl type="date" />{' '}
                                </div>

                            </FormGroup>
                            <FormGroup controlId="formInlineName" >
                                <div className="bg-form">
                                    <ControlLabel>Tipo de Documento:</ControlLabel>{'     '}
                                    <FormControl componentClass="select" placeholder="select" defaultValue="-1">
                                        <option value="-1" disabled>Seleccione Tipo de documento</option>
                                        {this.props.tipoDocumentos.map(doc => <option key={doc.id} value={doc.id}> {doc.nombre}</option>)}
                                    </FormControl>{' '}
                                    <ControlLabel>Número:</ControlLabel>{'     '}
                                    <FormControl type="text" className="input-full" />
                                    {' '} Sin guiones
                                </div>

                            </FormGroup>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type="submit" className="push-right" bsStyle="success" bsSize="large">Grabar</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Form>
            </div>
        );
    }
    
}

MortForm.propTypes = {
  getDepartamentos: PropTypes.func,
  getTipoDocumentos: PropTypes.func,
  getMunicipios: PropTypes.func,
  getEstablecimientos: PropTypes.func,
  getClasePartos: PropTypes.func,
  getLocalPartos: PropTypes.func,
  establecimientos: PropTypes.arrayOf(PropTypes.object),
  departamentos: PropTypes.arrayOf(PropTypes.object),
  clasePartos: PropTypes.arrayOf(PropTypes.object),
  municipios: PropTypes.arrayOf(PropTypes.object),
  tipoDocumentos: PropTypes.arrayOf(PropTypes.object),
  localPartos: PropTypes.arrayOf(PropTypes.object),
};

export default MortForm;
