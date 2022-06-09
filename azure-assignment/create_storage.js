const request = require("request");

const create_storage = (input) => {
  const storage_url =
    "https://management.azure.com/subscriptions/c5783c61-3b68-4f04-b3c4-212b19ecc864/resourceGroups/node/providers/Microsoft.Storage/storageAccounts/" +
    input +
    "?api-version=2021-09-01";
  request(
    {
      method: "PUT",
      headers: {
        Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldCIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2U5ZDRkNTRiLTdjMzctNDZhYy04YTFmLWM2MDI3ZGZlYTdlYi8iLCJpYXQiOjE2NTQ1Nzg0ODYsIm5iZiI6MTY1NDU3ODQ4NiwiZXhwIjoxNjU0NTgzNzI5LCJhY3IiOiIxIiwiYWlvIjoiQVdRQW0vOFRBQUFBS0NUK3VORktMTGtvZytLeHcxSUY1cjd6R3dtQmpIbFVtOVMzS2dkWjl5M0JNVnZDaWx3bSs0OWNYbnovSDRXeEVYbDJKcmw5TG4zckNpQXBiSkdrVWk0NjhEd0JYN05iTXduRXQraFVjWC9VQ1hRZWdzWk1zUzNiZVdtN1AxMUoiLCJhbHRzZWNpZCI6IjE6bGl2ZS5jb206MDAwMzQwMDE5QjU4N0E5NCIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiIxOGZiY2ExNi0yMjI0LTQ1ZjYtODViMC1mN2JmMmIzOWIzZjMiLCJhcHBpZGFjciI6IjAiLCJlbWFpbCI6ImNoYWRoYXJpdGlrNjg3QGdtYWlsLmNvbSIsImZhbWlseV9uYW1lIjoiQ2hhZGhhIiwiZ2l2ZW5fbmFtZSI6IlJpdGlrIiwiZ3JvdXBzIjpbImQ4NThhMzEwLTk1MjEtNGJkNS1iY2E4LWJmYTM2Yzc0NjE4NCJdLCJpZHAiOiJsaXZlLmNvbSIsImlwYWRkciI6IjQ5LjM2LjE4OC4xODEiLCJuYW1lIjoiUml0aWsgQ2hhZGhhIiwib2lkIjoiNDc4ZDE5MmItYmNmNC00MzYyLTg5MGYtNGY0YjBhNTZhYmYyIiwicHVpZCI6IjEwMDMyMDAxRTI0MTlFMjMiLCJyaCI6IjAuQVhFQVM5WFU2VGQ4ckVhS0g4WUNmZjZuNjBaSWYza0F1dGRQdWtQYXdmajJNQk9IQURjLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IlpMSXNsTXZTZy1aM0k5WmdONF8tT2RHb3BrTHlzcGVETHpLVGtaMzJFbFEiLCJ0aWQiOiJlOWQ0ZDU0Yi03YzM3LTQ2YWMtOGExZi1jNjAyN2RmZWE3ZWIiLCJ1bmlxdWVfbmFtZSI6ImxpdmUuY29tI2NoYWRoYXJpdGlrNjg3QGdtYWlsLmNvbSIsInV0aSI6InlnVklvYUc2N2tHS295Z2RXbUdyQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfdGNkdCI6MTY0NjcxODQ5OH0.K0gxfYDLMaCsAznUa6QvgsOcvbFWNs6B3XWsOtYL6MZ40SKZJWhCcYAifwxR0pFpy5tBkVk7LKVo6AZ41Xfdzu5s0XNO4ES1BpDLLyaW67RIOTHtFyoOA5S8SrHYIr5TpJ1CP9XqXexBui-Vtj9bns7aYCidRQeS43USKKRuh4iGbdCHg1uVNtbfBr_jZRnq_k53fRrrruMhkHAhFcxgZCltEvaGeppIxEjWvzcnwAjt7T4W5ADCsCKCAi9-jLWAsTaSgkVaIjl6lDpOwN_B1n0qiy_df6SRBiUIF_qHMCtrJaF3KOOp6jBowSaGXsnqZPbLCANaICZQlYGtg9wM5A",
        "Content-type": "application/json",
      },
      uri: storage_url,
      json: {
        kind: "Storage",
        location: "eastus",
        sku: { name: "Standard_GRS" },
      },
    },
    (error, response, body) => {
      // console.log(body);
      if (error) {
        console.log(error);
      } else {
        console.log("Storage acount created. Please check you Azure portal");
      }
    }
  );
};

module.exports = { create_storage };
