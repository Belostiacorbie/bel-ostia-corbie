BEL OSTIA V4 — GitHub Pages

À mettre à la racine du dépôt :
- index.html
- admin.html
- shared.js
- config.js
- supabase_setup.sql (ne gêne pas le site)

Le site client contient le menu Bel Ostia, boissons détaillées, tacos avec choix de viandes et panier.
admin.html contient l'espace de gestion des stocks.

IMPORTANT :
Sans Supabase, l'espace admin est uniquement une DÉMONSTRATION locale : le stock n'est pas partagé entre téléphones et ce n'est pas un vrai système de connexion sécurisé.
Avec Supabase configuré, l'e-mail/mot de passe et les stocks deviennent partagés et persistants.

Ne jamais mettre une clé Supabase service_role dans GitHub.
