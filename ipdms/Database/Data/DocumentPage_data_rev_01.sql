update DocumentPage set path = ( SELECT REPLACE(path, 'C:/kmendi/smart-ipdms/ipdms/ClientApp/public/PDF/', './../../../PDF/'))