BEL OSTIA V8 — COMMANDES + TICKETS

Nouveautés :
- Enregistrement des commandes dans Supabase.
- Numéro de commande automatique.
- Statut initial : pending_payment.
- Onglet Commandes dans l'administration.
- Statuts : payée > en préparation > prête > terminée.
- Ticket cuisine imprimable.
- Ticket client imprimable.
- Bouton de réimpression.

À faire AVANT test des commandes :
1. Dans Supabase > SQL Editor, exécuter le fichier supabase_orders_v8.sql.
2. Garder votre config.js actuel avec Supabase.
3. Remplacer sur GitHub : index.html, admin.html, shared.js.
4. Ne pas considérer une commande pending_payment comme payée.

Stripe / PrintNode :
- Stripe n'est PAS encore connecté dans cette V8.
- L'impression automatique PrintNode n'est PAS activée, car sa clé API doit rester côté serveur.
- Les tickets peuvent déjà être imprimés manuellement depuis l'admin.
- La future fonction serveur recevra le webhook Stripe, mettra la commande sur "paid" et enverra le ticket à PrintNode.
