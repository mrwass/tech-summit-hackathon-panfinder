package wsPanFinder;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;

/**
 * This class was generated by the JAX-WS RI. JAX-WS RI 2.1.3-hudson-390-
 * Generated source version: 2.0
 * 
 */
@WebService(name = "wsEstablishmentsHttpPost", targetNamespace = "http://tempuri.org/")
@SOAPBinding(parameterStyle = SOAPBinding.ParameterStyle.BARE)
public interface WsEstablishmentsHttpPost {

	/**
	 * 
	 * @param status
	 * @param establishment
	 * @param municipality
	 * @return returns wsPanFinder.ArrayOfOBJEstablishment
	 */
	@WebMethod
	@WebResult(name = "ArrayOfOBJ_Establishment", targetNamespace = "http://tempuri.org/", partName = "Body")
	public ArrayOfOBJEstablishment getEstablishments(
			@WebParam(name = "string", targetNamespace = "http://www.w3.org/2001/XMLSchema", partName = "status") String status,
			@WebParam(name = "string", targetNamespace = "http://www.w3.org/2001/XMLSchema", partName = "establishment") String establishment,
			@WebParam(name = "string", targetNamespace = "http://www.w3.org/2001/XMLSchema", partName = "municipality") String municipality);

}
