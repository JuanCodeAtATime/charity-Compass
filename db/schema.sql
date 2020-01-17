CREATE DATABASE
IF NOT EXISTS charityCompass_db;

CREATE TABLE CharityCompasses
(

    Charity_Foundation_Name varchar(255) not null,
    Classification varchar(255) not null,
    City varchar(255) not null,
    State varchar(255) not null,
    IRS_Subsection varchar(255) not null

)