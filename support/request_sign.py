import requests
import warnings
from urllib3.exceptions import InsecureRequestWarning
import json

# Ignorar avisos de certificado SSL
warnings.simplefilter('ignore', InsecureRequestWarning)

import ibm_db
import pandas as pd


dsn_driver2 = "dsn_driver"
dsn_database2 = "dsn_database"
dsn_hostname2 = "dsn_hostname2"
dsn_port2 = "dsn_port2"
dsn_protocol2 = "dsn_protocol2"
dsn_uid2 = "dsn_uid2"
dsn_pwd2 = "@dsn_pwd2#"

dsn2 = (
    "DRIVER={{IBM DB2 ODBC DRIVER}};"
    "DATABASE={0};"
    "HOSTNAME={1};"
    "PORT={2};"
    "PROTOCOL=TCPIP;"
    "UID={3};"
    "PWD={4};").format(dsn_database2, dsn_hostname2, dsn_port2, dsn_uid2, dsn_pwd2)

# Verificar Conexão com o Banco de Dados

conn = ibm_db.connect(dsn2, "", "")

sql = """
QUERY
"""
stmt = ibm_db.exec_immediate(conn, sql)

# Recupera o resultado da consulta
result = ibm_db.fetch_assoc(stmt)
doc_ident = result['LISTSIGN_DOCIDENT'] if result else None

ibm_db.close(conn)

# Dados da solicitação
solicitacao_soap = { 
  "appCode": "S557GED",
  "docIdent":doc_ident,
  "usrSignCpf": "CPF",
  "ip": "0",
  "latitude": "0",
  "longitude": "0"
}

# Cabeçalhos da requisição
header = {
    'Content-Type': 'application/json',
    'Authorization': 'TOKEN'
}

# URL do serviço
url = "URL"

# Enviar solicitação com JSON corretamente formatado
response = requests.post(url, json=solicitacao_soap, headers=header, verify=False)

print(json.dumps({
    "status": response.status_code,
    "message": response.text,
}))
