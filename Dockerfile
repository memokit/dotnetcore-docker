# Install dependencies only when needed
FROM mcr.microsoft.com/dotnet/core/sdk:5.0-alpine AS build

WORKDIR /app

COPY *.csproj .
RUN dotnet restore

COPY . .
RUN dotnet build -c Release

FROM build AS publish
RUN dotnet publish -c Release -o /publish

FROM base AS final
WORKDIR /app
COPY --from=publish /publish .
ENTRYPOINT ["dotnet", "ExternalEPODAPI.dll"]


FROM mcr.microsoft.com/dotnet/core/aspnet AS base
WORKDIR /app
EXPOSE 5000

