package PanFinder;
import java.util.List;
import wsPanFinder.*;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
public class PanInfo {

	
	public String fetchInfo(String Town){
     
		

		JSONObject obj2 = new JSONObject();
		
		try{
			
			
			ArrayOfOBJEstablishment Est;
			List<OBJEstablishment> list;
			WsEstablishments ws = new WsEstablishments();
			Est = ws.getWsEstablishmentsSoap().getEstablishments("Activo", "*",Town);
			list =Est.getOBJEstablishment();
			OBJEstablishment EstResult;
			
			/*
			
			JSONObject obj = new JSONObject();
			obj.put("name", "mkyong.com");
			obj.put("age", new Integer(100));
		 
			JSONArray list = new JSONArray();
			list.add("msg 1");
			list.add("msg 2");
			list.add("msg 3");
		 
			obj.put("messages", list);
			*/
			
			JSONArray dataset = new JSONArray();
			//int i =0;
			
			//while(list.listIterator().hasNext())
			int csize=list.size();
			for(int i=0;i<csize;i++)
			{
				
				JSONObject obj = new JSONObject();
				
			    
				EstResult=	list.get(i);
				
				
				obj.put("Physical1",EstResult.getEstAddPhysical1());
				obj.put("Physical2",EstResult.getEstAddPhysical2());
				obj.put("Phone1",EstResult.getEstPhone1());
				obj.put("Phone2",EstResult.getEstPhone2());
				obj.put("Name",EstResult.getEstName());
				obj.put("PostalCity",EstResult.getEstAddPhysicalCity());
				obj.put("IdComercial",EstResult.getEstId());
				obj.put("Lat",EstResult.getEstLatLong());
				obj.put("Town",Town);
				
				dataset.add(obj);
			
				
			
			}
			obj2.put("Data",dataset);
			 
		   
		}catch(Exception ex){
			
			//System.out.print(ex.toString());
			//return "";
		}
		
		return obj2.toJSONString();
		
		
	}
	
	
}
