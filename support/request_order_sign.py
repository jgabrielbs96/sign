import requests
import warnings
from urllib3.exceptions import InsecureRequestWarning
import datetime
import json

warnings.simplefilter('ignore', InsecureRequestWarning)

# Cabeçalhos corretos
headers = {
    "Content-Type": "application/json",
    "Authorization": "TOKEN"
}
# Dados fixos do signatário
signer_name = "NAME"
signer_email = "EMAIL"
signer_celular = "PHONE"
signer_cpf = "CPF"
signer_rg = "RG"
signer_codcli = "0000"
signer_matfunc = "MATRICULA"
signer_tipass = "INTERNO"
signer_order = "0"

signer_name2 = "NAME"
signer_email2 = "EMAIL"
signer_celular2 = "PHONE"
signer_cpf2 = "CPF"
signer_rg2 = "RG"
signer_codcli2 = "0000"
signer_matfunc2 = "MATRICULA"
signer_tipass2 = "INTERNO"
signer_order2 = "1"

# Gerar campos dinâmicos
now = datetime.datetime.now()
doc_ident = f"testsSign{now.strftime('%Y%m%d%H%M%S')}"
document_title = "Teste ordem de assinatura"
list_sign_date_not = now.strftime('%Y-%m-%d %H:%M:%S')
list_sign_date_exp = (now + datetime.timedelta(days=1)).strftime('%Y-%m-%d %H:%M:%S')

# Dados da solicitação
payload = {
    "file": "JVBERi0xLjQKJcfsj6IKNSAwIG9iago8PC9MZW5ndGggNiAwIFIvRmlsdGVyIC9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nO2XTW8TMRCG7/sr9oYXscZf448rggviAtob5VC1BQk1hRZa8fOZcdYbJ9k0TVsKQtNIjePdecd+PbNPctkqqU2r6FUGJ4tGtV+ayyZKS395sh6fLNpXQ/PyQ2g1yOTb4XOjZErJaZev6zaCVLEN4KWP7bBoRNsNXxsT8t3v6OMz+hQdfRqefxSvu15JY6LRVnzreicVgDLipMNVWeVUENddr7WEEI1YdFpJb00UZ6vrF2OUi+IniVlIKqRJDKfbTstgbfR12K/V9bOuD9ImlF0l+F6yBnG+VI3a63nVI4HDFDCt+NH1RhrlcbFbqipVMTcroePVojZSLVdgxVXWjxrEUdf1IMGB8ij2aXi7tHT1Lx+OqU5m7WAgWTpsPBhyntRBZd/xDJJLwaHxVuLbdTW1oD05r4D8y1cvllcBIpDnRmqP46KTp1ucxm1BmoLQcLTBKtzFOLMUhpSA7J5Cz/cqouFGRlyQJsM11k9KYUM1BluH3FRKx8sbt/N4pyKaXbTR7DJ8QTdo5yHoSTU6cVqp1mtddzFPVZvd7aKzfnbPmGrORU1TkPYYeYvoaKSzCY2kajLBYavS42A4xRrZPqgqeLelmxmvpiyjpTScszT9dUur/XqDqxz9tNoZ3B09uTQ4FEwyaBOoCQ0ocq4v1vXayRiX/pVC3VmmuatwSY5WkIqlue12Vmll6XyVBmzzSvQxHdW4lqBh09Ex0z07feaIsmBM6wVKFlpt5quyRBxSlbibqPEBuF2VaxbGB3uYWyshMwOU1tpdniXng9yk+lTWPIGXuTV2dbimVrMwsqovHtQ9clrV/B8ikVNUtXsb/gASFcUDSFRC7kSivT0e6dtAUcUvTE/w2Cyp5lzsvTT+PiQqorMkUup2EpXgxyHR1PP3slRTZUJ6PEtvJ9FGq2+jiLxjFDGKGEX7UATMIeYQc4g5xBxiDvFPIkYRo4hRxChiFDGKGEWMIkYRo4hRxChiFDGKGEWMIkYRo4hRxChiFDGKGEWMIkYRo4hRxCj6H1EEzCHmEHOIOcQcYg7xTyJGEaPoH0ZR8E+GonyiIe1t+QNYNEkeAKMp5oE0kqOvLoy+vhma9/j6DfTI5pFlbmRzdHJlYW0KZW5kb2JqCjYgMCBvYmoKODMxCmVuZG9iago0IDAgb2JqCjw8L1R5cGUvUGFnZS9NZWRpYUJveCBbMCAwIDU5NSA4NDJdCi9Sb3RhdGUgMC9QYXJlbnQgMyAwIFIKL1Jlc291cmNlczw8L1Byb2NTZXRbL1BERiAvVGV4dF0KL0ZvbnQgOCAwIFIKPj4KL0NvbnRlbnRzIDUgMCBSCj4+CmVuZG9iagozIDAgb2JqCjw8IC9UeXBlIC9QYWdlcyAvS2lkcyBbCjQgMCBSCl0gL0NvdW50IDEKPj4KZW5kb2JqCjEgMCBvYmoKPDwvVHlwZSAvQ2F0YWxvZyAvUGFnZXMgMyAwIFIKL01ldGFkYXRhIDkgMCBSCj4+CmVuZG9iago4IDAgb2JqCjw8L1I3CjcgMCBSPj4KZW5kb2JqCjcgMCBvYmoKPDwvQmFzZUZvbnQvVGltZXMtUm9tYW4vVHlwZS9Gb250Ci9TdWJ0eXBlL1R5cGUxPj4KZW5kb2JqCjkgMCBvYmoKPDwvVHlwZS9NZXRhZGF0YQovU3VidHlwZS9YTUwvTGVuZ3RoIDE1NTQ+PnN0cmVhbQo8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8P2Fkb2JlLXhhcC1maWx0ZXJzIGVzYz0iQ1JMRiI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJyB4OnhtcHRrPSdYTVAgdG9vbGtpdCAyLjkuMS0xMywgZnJhbWV3b3JrIDEuNic+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIycgeG1sbnM6aVg9J2h0dHA6Ly9ucy5hZG9iZS5jb20vaVgvMS4wLyc+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSd1dWlkOmY1YjMxOTgyLWRhNGEtMTFlYS0wMDAwLWMzOGRkNjVkY2QxYScgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz48cGRmOlByb2R1Y2VyPkdQTCBHaG9zdHNjcmlwdCA5LjA1PC9wZGY6UHJvZHVjZXI+CjxwZGY6S2V5d29yZHM+KCk8L3BkZjpLZXl3b3Jkcz4KPC9yZGY6RGVzY3JpcHRpb24+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSd1dWlkOmY1YjMxOTgyLWRhNGEtMTFlYS0wMDAwLWMzOGRkNjVkY2QxYScgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz48eG1wOk1vZGlmeURhdGU+MjAyMC0wOC0wNlQxMToxNjozNi0wMzowMDwveG1wOk1vZGlmeURhdGU+Cjx4bXA6Q3JlYXRlRGF0ZT4yMDIwLTA4LTA2VDExOjE2OjM2LTAzOjAwPC94bXA6Q3JlYXRlRGF0ZT4KPHhtcDpDcmVhdG9yVG9vbD5QREZDcmVhdG9yIFZlcnNpb24gMS4zLjI8L3htcDpDcmVhdG9yVG9vbD48L3JkZjpEZXNjcmlwdGlvbj4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9J3V1aWQ6ZjViMzE5ODItZGE0YS0xMWVhLTAwMDAtYzM4ZGQ2NWRjZDFhJyB4bWxuczp4YXBNTT0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLycgeGFwTU06RG9jdW1lbnRJRD0ndXVpZDpmNWIzMTk4Mi1kYTRhLTExZWEtMDAwMC1jMzhkZDY1ZGNkMWEnLz4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9J3V1aWQ6ZjViMzE5ODItZGE0YS0xMWVhLTAwMDAtYzM4ZGQ2NWRjZDFhJyB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nIGRjOmZvcm1hdD0nYXBwbGljYXRpb24vcGRmJz48ZGM6dGl0bGU+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5Eb2NFeGVtcGxvPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6dGl0bGU+PGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5DMDEzMDIyPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpTZXE+PHJkZjpsaT4oKTwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmRlc2NyaXB0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9J3cnPz4KZW5kc3RyZWFtCmVuZG9iagoyIDAgb2JqCjw8L1Byb2R1Y2VyKEdQTCBHaG9zdHNjcmlwdCA5LjA1KQovQ3JlYXRpb25EYXRlKEQ6MjAyMDA4MDYxMTE2MzYtMDMnMDAnKQovTW9kRGF0ZShEOjIwMjAwODA2MTExNjM2LTAzJzAwJykKL1RpdGxlKFwzNzZcMzc3XDAwMERcMDAwb1wwMDBjXDAwMEVcMDAweFwwMDBlXDAwMG1cMDAwcFwwMDBsXDAwMG8pCi9DcmVhdG9yKFwzNzZcMzc3XDAwMFBcMDAwRFwwMDBGXDAwMENcMDAwclwwMDBlXDAwMGFcMDAwdFwwMDBvXDAwMHJcMDAwIFwwMDBWXDAwMGVcMDAwclwwMDBzXDAwMGlcMDAwb1wwMDBuXDAwMCBcMDAwMVwwMDAuXDAwMDNcMDAwLlwwMDAyKQovQXV0aG9yKFwzNzZcMzc3XDAwMENcMDAwMFwwMDAxXDAwMDNcMDAwMFwwMDAyXDAwMDIpCi9LZXl3b3JkcygpCi9TdWJqZWN0KCk+PmVuZG9iagp4cmVmCjAgMTAKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAxMTM1IDAwMDAwIG4gCjAwMDAwMDI5MjQgMDAwMDAgbiAKMDAwMDAwMTA3NiAwMDAwMCBuIAowMDAwMDAwOTM1IDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDkxNiAwMDAwMCBuIAowMDAwMDAxMjI4IDAwMDAwIG4gCjAwMDAwMDExOTkgMDAwMDAgbiAKMDAwMDAwMTI5NCAwMDAwMCBuIAp0cmFpbGVyCjw8IC9TaXplIDEwIC9Sb290IDEgMCBSIC9JbmZvIDIgMCBSCi9JRCBbPDlGQjExOUYzQzhGNjBFQUUyMjY3RjhEOTkyMzY5NjJFPjw5RkIxMTlGM0M4RjYwRUFFMjI2N0Y4RDk5MjM2OTYyRT5dCj4+CnN0YXJ0eHJlZgozMzI5CiUlRU9GCg==",
    "documentNfHash": "1E36AEE582A951D2BC37FC860DE0727AF4C727BD6FE68B34295024F1348554E6",
    "appCode": "S557GED",
    "siteNumber": "1681",
    "listSignIp": "0.0.0.0",
    "listSignDateNot": list_sign_date_not,
    "listSignDateExp": list_sign_date_exp,
    "operation": "insertDocument",
    "documentTitle": document_title,
    "docIdent": doc_ident,
    "typeFolder": "DOSCRED",
    "typeDoc": "TYPE_ID",
    "typeTrail": "TYPE_TRAI",
    "keys": [
        {
            "keysDoc": [
                {
                    "keydefAlias": "documentoorigem",
                    "dockeyValue": "Documento Nato-Digital (exclusivo para importação)"
                }
            ]
        },
        {
            "keysFolder": [
                {
                    "keydefAlias": "CPF/CNPJ",
                    "dockeyValue": signer_cpf
                },
                {
                    "keydefAlias": "NOME",
                    "dockeyValue": signer_name
                }
            ]
        },
        {
            "keysTrail": [
                {
                    "keydefAlias": "IDENTIFICADOR",
                    "dockeyValue": doc_ident
                },
                {
                    "keydefAlias": "documentoorigem",
                    "dockeyValue": "Documento Nato-Digital (exclusivo para importação)"
                }
            ]
        }
    ],
    "signers": [
        {
            "usrSignName": signer_name,
            "usrSignEmail": signer_email,
            "usrSignCelular": signer_celular,
            "usrSignCpf": signer_cpf,
            "usrSignRg": signer_rg,
            "usrSignCodCli": signer_codcli,
            "usrSignMatFunc": signer_matfunc,
            "usrSignTipAss": signer_tipass,
            "listSignOrderEmail": signer_order
        },
        {
            "usrSignName": signer_name2,
            "usrSignEmail": signer_email2,
            "usrSignCelular": signer_celular2,
            "usrSignCpf": signer_cpf2,
            "usrSignRg": signer_rg2,
            "usrSignCodCli": signer_codcli2,
            "usrSignMatFunc": signer_matfunc2,
            "usrSignTipAss": signer_tipass2,
            "listSignOrderEmail": signer_order2
        }
    ]
}
# Enviar requisição
url = "URL"
response = requests.post(url, headers=headers, json=payload, verify=False)

print(json.dumps({
    "status": response.status_code,
    "message": response.text,
    "nomeDocumento": document_title
}))

