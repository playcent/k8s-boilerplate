# INSTALLABLES

- [Install Docker Desktop](https://docs.docker.com/desktop/)

- [Enable Kubernetes](https://docs.docker.com/desktop/kubernetes/)

- [Install Skaffold](https://skaffold.dev/docs/install/)

- [Install Ingress Nginx](https://kubernetes.github.io/ingress-nginx/deploy/)

## RUN COMMAND
```
cd backend/
skaffold dev
```

## K8s JOB Creation (One time run to execute db migrations.)
```
cd backend/k8s/
kubectl apply -f jobs/
```


## K8s Dashboard 
- Load YAML 
```
cd backend/k8s/
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
kubectl apply -f dashboard-user/
```
- Get Bearer token (copy this token)
```
kubectl -n kubernetes-dashboard create token admin-user
```
- Enable dashboard
```
kubectl proxy
```
- [Paste the token here](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/)