# Install dependencies only when needed
FROM mcr.microsoft.com/dotnet/aspnet:5.0.12 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

WORKDIR /app

COPY *.csproj .
RUN dotnet restore

COPY . .
RUN  dotnet publish -c release -o /publish --no-restore

# FROM build AS publish
# RUN dotnet publish -c Release -o /publish

FROM base AS final
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "ExternalEPODAPI.dll"]

