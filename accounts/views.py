# from .models import User
from .serializers import *
from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
# Create your views here.

class LoginAPI(generics.GenericAPIView):
    serializer_class= LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer= self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user= serializer.validated_data

        return Response({
            'user': UserSerializer(user).data,
            'token': AuthToken.objects.create(user)[1]
        })

class RegisterAPI(generics.GenericAPIView):
    serializer_class= RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer= self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user= serializer.save()

        return Response({
            'user': UserSerializer(user).data,
            'token': AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):
	permission_classes = [
		permissions.IsAuthenticated
	]
	serializer_class = UserSerializer

	def get_object(self):
		self.request.user