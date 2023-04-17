# INSTALLABLES

- [Install VSCODE](https://code.visualstudio.com/download/)

- [Install Docker Desktop](https://docs.docker.com/desktop/)

- [Enable Kubernetes](https://docs.docker.com/desktop/kubernetes/)

- [Install Skaffold](https://skaffold.dev/docs/install/)

- [Install Ingress Nginx](https://kubernetes.github.io/ingress-nginx/deploy/)

## RUN FROM TERMINAL
```
skaffold dev
```

## RUN FROM IDE
[Install CloudCode Extension](https://cloud.google.com/code/docs/vscode/install)


## K8s Dashboard 
- Load YAML 
```
cd k8s/
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