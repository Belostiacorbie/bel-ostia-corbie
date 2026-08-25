
const MENU = [{"cat": "Pizzas sauce tomate", "name": "Marguerita", "desc": "Tomate, mozzarella", "sizes": {"Junior": 7, "Sénior": 12, "Méga": 17}}, {"cat": "Pizzas sauce tomate", "name": "Reine", "desc": "Tomate, mozzarella, jambon, champignons", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Kebab", "desc": "Tomate, mozzarella, kebab, cheddar, poivrons, oignons", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Burrata", "desc": "Tomate, mozzarella, burrata, roquette, tomates cerises, parmesan", "sizes": {"Junior": 9, "Sénior": 16, "Méga": 22}}, {"cat": "Pizzas sauce tomate", "name": "Campione", "desc": "Tomate, mozzarella, viande hachée, champignons, oignons", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Napolitaine", "desc": "Tomate, mozzarella, anchois, câpres, olives", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Suprême", "desc": "Tomate, mozzarella, jambon, merguez, chorizo, champignons, œuf", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Norvégienne", "desc": "Tomate, mozzarella, saumon fumé", "sizes": {"Junior": 10, "Sénior": 16, "Méga": 22}}, {"cat": "Pizzas sauce tomate", "name": "Orientale", "desc": "Tomate, mozzarella, double merguez, poivrons, oignons, œuf", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Pescatore", "desc": "Tomate, mozzarella, fruits de mer, ail, olives", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Calzone soufflée", "desc": "Tomate, mozzarella, œuf, jambon ou thon ou viande hachée", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Neptune", "desc": "Tomate, mozzarella, thon, poivrons, œuf, olives", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "3 Jambons", "desc": "Tomate, mozzarella, jambon, lardons, pepperoni, chorizo", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "4 Saisons", "desc": "Tomate, mozzarella, jambon, champignons, artichauts, poivrons, olives", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Campagnarde", "desc": "Tomate, mozzarella, lardons, oignons, pommes de terre, œuf", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "4 Fromages", "desc": "Tomate, mozzarella, chèvre, brie, parmesan, bleu d’Auvergne", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Végétarienne", "desc": "Tomate, mozzarella, poivrons, champignons, artichauts, tomates fraîches, oignons, olives", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Aubergine", "desc": "Tomate, mozzarella, viande hachée, aubergines, tomates fraîches, olives", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Rimini", "desc": "Tomate, mozzarella, poulet, poivrons, oignons, olives", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Cannibale", "desc": "Tomate, mozzarella, viande hachée, merguez, poulet", "sizes": {"Junior": 9, "Sénior": 15, "Méga": 20}}, {"cat": "Pizzas sauce tomate", "name": "Barbecue", "desc": "Sauce barbecue, mozzarella, viande hachée, poulet, oignons, tomates fraîches", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas sauce tomate", "name": "Rimini curry", "desc": "Sauce curry, mozzarella, poulet, poivrons, oignons, tomates fraîches, olives", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas sauce tomate", "name": "Biggy", "desc": "Sauce biggy, mozzarella, viande hachée, oignons rouges, tomates fraîches, cheddar", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Savoyarde", "desc": "Crème fraîche, mozzarella, lardons, reblochon, pommes de terre", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Bourgeoise", "desc": "Crème fraîche, mozzarella, lardons, jambon, œuf", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Brésilienne", "desc": "Crème fraîche, mozzarella, viande hachée, merguez, poivrons, olives", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Fromager", "desc": "Crème fraîche, mozzarella, chèvre, brie, parmesan, bleu d’Auvergne", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Raclette", "desc": "Crème fraîche, mozzarella, jambon, raclette, pommes de terre", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Chicken", "desc": "Crème fraîche, mozzarella, blanc de poulet, poivrons, champignons", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "La Dolce", "desc": "Crème fraîche, mozzarella, blanc de poulet, chèvre, miel", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Chicago", "desc": "Crème fraîche, mozzarella, viande hachée, jambon, œuf, cheddar", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Ostia", "desc": "Crème fraîche, mozzarella, blanc de poulet, maroilles, pommes de terre", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Normande", "desc": "Crème fraîche, mozzarella, jambon, oignons, pommes de terre, olives", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Boursin", "desc": "Crème fraîche, mozzarella, viande hachée, boursin, oignons, olives", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Chèvre miel", "desc": "Crème fraîche, mozzarella, chèvre, miel", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 20.5}}, {"cat": "Pizzas crème fraîche", "name": "Pacifico", "desc": "Crème fraîche, mozzarella, saumon fumé", "sizes": {"Junior": 9.5, "Sénior": 15.5, "Méga": 22.5}}, {"cat": "Burgers", "name": "Cheese Burger", "desc": "1 steak 90 g, cheddar, crudités", "price": 5}, {"cat": "Burgers", "name": "Cheese Burger XL", "desc": "2 steaks 90 g, 2 cheddar, crudités", "price": 6}, {"cat": "Burgers", "name": "Mac Ostia", "desc": "2 steaks 90 g, 2 cheddar, bacon, crudités, galette de pommes de terre", "price": 8}, {"cat": "Burgers", "name": "Mac Butcher", "desc": "2 steaks 90 g, 2 cheddar, bacon, onion rings, crudités", "price": 8}, {"cat": "Burgers", "name": "Chicken Burger", "desc": "Poulet, cheddar, crudités", "price": 6}, {"cat": "Burgers", "name": "Mac Maroual", "desc": "2 steaks 90 g, maroilles, crudités", "price": 7}, {"cat": "Burgers", "name": "Mac Fromager", "desc": "2 steaks 90 g, chèvre, miel, crudités", "price": 8}, {"cat": "Sandwichs", "name": "Boursin", "desc": "Poulet boursin, crudités", "price": 7}, {"cat": "Sandwichs", "name": "Curry", "desc": "Poulet mariné au curry, crudités, fromage", "price": 7}, {"cat": "Sandwichs", "name": "Buffalo", "desc": "2 steaks, œuf, fromage, crudités", "price": 7}, {"cat": "Sandwichs", "name": "Tandoori", "desc": "Poulet mariné au tandoori, fromage, crudités", "price": 7}, {"cat": "Sandwichs", "name": "Grec", "desc": "Viande de grec, crudités", "price": 7}, {"cat": "Sandwichs", "name": "Mixte", "desc": "2 viandes au choix, fromage, crudités", "price": 8.5}, {"cat": "Paninis", "name": "Crudités", "desc": "Thon, tomate, fromage", "price": 6}, {"cat": "Paninis", "name": "Oriental", "desc": "Merguez, tomate, fromage", "price": 6}, {"cat": "Paninis", "name": "Jambon", "desc": "Jambon, tomate, fromage", "price": 6}, {"cat": "Paninis", "name": "Grec", "desc": "Viande façon grec, tomate, fromage", "price": 6}, {"cat": "Paninis", "name": "Bolognaise", "desc": "Viande hachée, tomate, fromage", "price": 6}, {"cat": "Paninis", "name": "Poulet", "desc": "Poulet, crème fraîche, fromage", "price": 6}, {"cat": "Paninis", "name": "Fromager", "desc": "Chèvre, brie, crème fraîche, fromage", "price": 6}, {"cat": "Paninis", "name": "Atlantik", "desc": "Saumon, crème fraîche, fromage", "price": 6}, {"cat": "Paninis", "name": "Nutella", "desc": "", "price": 3}, {"cat": "Salades", "name": "Norvégienne", "desc": "Salade verte, tomates, saumon fumé, olives", "price": 7}, {"cat": "Salades", "name": "Fromage", "desc": "Salade verte, tomates, brie, gorgonzola, chèvre, olives", "price": 7}, {"cat": "Salades", "name": "Niçoise", "desc": "Salade verte, tomates, œufs durs, thon, anchois, olives", "price": 7}, {"cat": "Salades", "name": "Fermière", "desc": "Salade verte, tomates, poulet, brie, pommes de terre, œuf, olives", "price": 7}, {"cat": "Salades", "name": "Parisienne", "desc": "Salade verte, tomates, jambon, brie, pommes de terre, œufs durs", "price": 7}, {"cat": "Salades", "name": "Chèvre chaud", "desc": "Salade verte, tomates, lardons, chèvre chaud sur toast", "price": 7}, {"cat": "Salades", "name": "Burrata", "desc": "Salade verte, tomates, burrata, crème balsamique", "price": 7}, {"cat": "Tex-Mex", "name": "Frites", "desc": "Barquette", "price": 2.5}, {"cat": "Tex-Mex", "name": "Potatoes", "desc": "Barquette", "price": 2.5}, {"cat": "Tex-Mex", "name": "Camembert 8 pièces", "desc": "", "price": 7}, {"cat": "Tex-Mex", "name": "Camembert 12 pièces", "desc": "", "price": 10.5}, {"cat": "Tex-Mex", "name": "Nuggets 8 pièces", "desc": "", "price": 7}, {"cat": "Tex-Mex", "name": "Nuggets 12 pièces", "desc": "", "price": 10.5}, {"cat": "Tex-Mex", "name": "Wings 8 pièces", "desc": "", "price": 8}, {"cat": "Tex-Mex", "name": "Wings 12 pièces", "desc": "", "price": 11.5}, {"cat": "Tex-Mex", "name": "Tenders 6 pièces", "desc": "", "price": 8}, {"cat": "Tex-Mex", "name": "Tenders 12 pièces", "desc": "", "price": 14.5}, {"cat": "Tex-Mex", "name": "Onion rings 8 pièces", "desc": "", "price": 7}, {"cat": "Tex-Mex", "name": "Onion rings 12 pièces", "desc": "", "price": 10.5}, {"cat": "Tex-Mex", "name": "Jalapeños 8 pièces", "desc": "", "price": 7}, {"cat": "Tex-Mex", "name": "Jalapeños 12 pièces", "desc": "", "price": 10.5}, {"cat": "Tex-Mex", "name": "Mozza sticks 8 pièces", "desc": "", "price": 7}, {"cat": "Tex-Mex", "name": "Mozza sticks 12 pièces", "desc": "", "price": 10.5}, {"cat": "Desserts & glaces", "name": "Brownie", "desc": "", "price": 2}, {"cat": "Desserts & glaces", "name": "Tarte normande", "desc": "", "price": 2.5}, {"cat": "Desserts & glaces", "name": "Tiramisu", "desc": "", "price": 2.5}, {"cat": "Desserts & glaces", "name": "Tarte citron", "desc": "", "price": 2.5}, {"cat": "Desserts & glaces", "name": "Tarte au Daim", "desc": "", "price": 2.5}, {"cat": "Desserts & glaces", "name": "Tarte Snickers", "desc": "", "price": 2.5}, {"cat": "Desserts & glaces", "name": "Glace 100 ml", "desc": "", "price": 3}, {"cat": "Desserts & glaces", "name": "Glace 500 ml", "desc": "", "price": 6.5}, {"cat": "Tacos", "name": "Tacos 1 viande", "desc": "Sauce fromagère • choisissez 1 viande", "price": 6.5, "meatCount": 1}, {"cat": "Tacos", "name": "Tacos 2 viandes", "desc": "Sauce fromagère • choisissez 2 viandes", "price": 8.5, "meatCount": 2}, {"cat": "Tacos", "name": "Tacos 3 viandes", "desc": "Sauce fromagère • choisissez 3 viandes", "price": 10.5, "meatCount": 3}];
const DRINKS = {"Canettes 33 cl": ["Coca-Cola", "Coca-Cola Zero", "Fanta Orange", "Fanta Citron", "Sprite", "Orangina", "Oasis Tropical", "Oasis Pomme Cassis Framboise", "Schweppes Agrum'", "Hawaii"], "Bouteilles 1,5 L": ["Coca-Cola", "Fanta Orange", "Fanta Citron", "Coca-Cola Zero", "Sprite", "Orangina", "Oasis Tropical", "Pepsi"], "Bouteilles 2 L": ["Oasis Tropical"]};
const TACO_MEATS = ["Kebab", "Poulet curry", "Poulet tandoori", "Viande hachée", "Merguez", "Cordon bleu", "Tenders", "Nuggets", "Steak haché", "Bacon"];

const cfg = window.BEL_OSTIA || {};
const connected = !!(cfg.supabaseUrl && cfg.supabaseAnonKey && window.supabase);
const sb = connected ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey) : null;

function euro(n){ return Number(n).toFixed(2).replace(".",",")+" €"; }
function esc(s){ return String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }

function defaultStockRows(){
  const rows=[];
  Object.entries(DRINKS).forEach(([category,names])=>{
    names.forEach(name=>rows.push({
      type:"drink", category, name, stock:10,
      price: category.includes("33") ? 1.5 : 3, enabled:true
    }))
  });
  TACO_MEATS.forEach(name=>rows.push({
    type:"taco_meat", category:"Viandes tacos", name, stock:20, price:0, enabled:true
  }));
  return rows;
}

async function getStockRows(){
  if(sb){
    const {data,error}=await sb.from("stock_items").select("*").order("type").order("category").order("name");
    if(!error && data) return data;
  }
  let rows;
  try{ rows=JSON.parse(localStorage.getItem("belostia_v4_stock")||"null"); }catch(e){}
  if(!rows){
    rows=defaultStockRows();
    localStorage.setItem("belostia_v4_stock",JSON.stringify(rows));
  }
  return rows;
}

async function upsertStock(row){
  row.stock=Math.max(0,Number(row.stock||0));
  row.enabled=row.stock>0;
  if(sb){
    const payload={
      type:row.type, category:row.category, name:row.name,
      stock:row.stock, price:Number(row.price||0), enabled:row.enabled
    };
    const {error}=await sb.from("stock_items").upsert(payload,{onConflict:"type,category,name"});
    if(!error) return true;
  }
  const rows=await getStockRows();
  const i=rows.findIndex(x=>x.type===row.type&&x.category===row.category&&x.name===row.name);
  if(i>=0) rows[i]=row; else rows.push(row);
  localStorage.setItem("belostia_v4_stock",JSON.stringify(rows));
  return true;
}

async function setStock(type,category,name,value){
  const rows=await getStockRows();
  const row=rows.find(x=>x.type===type&&x.category===category&&x.name===name);
  if(!row) return;
  row.stock=Math.max(0,parseInt(value||0,10));
  row.enabled=row.stock>0;
  await upsertStock(row);
}

async function adjustStock(type,category,name,delta){
  const rows=await getStockRows();
  const row=rows.find(x=>x.type===type&&x.category===category&&x.name===name);
  if(!row) return;
  row.stock=Math.max(0,Number(row.stock||0)+delta);
  row.enabled=row.stock>0;
  await upsertStock(row);
}
