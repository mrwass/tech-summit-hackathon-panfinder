package PanFinder;

import java.util.List;

import wsPanFinder.*;
public class clgetLocals {

	public void test(){
		try{
			
			String Test  = "";
			ArrayOfOBJEstablishment sopa;
			List<OBJEstablishment> list;
			WsEstablishments ws = new WsEstablishments();
			sopa = ws.getWsEstablishmentsSoap().getEstablishments("Activo", "*", "SAN JUAN");
			list =sopa.getOBJEstablishment();
			OBJEstablishment local;
			
			local = list.get(0);
			
			Test = local.getEstName();
			System.out.print(Test);
			//return sopa.toString();
		}catch(Exception ex){
			
			System.out.print(ex.toString());
			//return "";
		}
		
	
		
		
	}
}
