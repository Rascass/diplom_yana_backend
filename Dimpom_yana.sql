CREATE TABLE "public.Users" (
	"login" VARCHAR(255) NOT NULL UNIQUE,
	"pass" VARCHAR(255) NOT NULL,
	"role_id" integer NOT NULL,
	"person_id" integer NOT NULL UNIQUE,
	"id" serial NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Roles" (
	"role_name" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "Roles_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.News" (
	"title" VARCHAR(255) NOT NULL,
	"content" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "News_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Products" (
	"price" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	"sellable_id" integer NOT NULL,
	"seller_id" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "Products_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Hourses" (
	"nickname" VARCHAR(255) NOT NULL,
	"sex" VARCHAR(255) NOT NULL,
	"club_id" integer NOT NULL,
	"id" serial NOT NULL,
	"hourse_type_id" integer NOT NULL,
	"birthday" DATE NOT NULL,
	CONSTRAINT "Hourses_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Competitions" (
	"id" serial NOT NULL,
	"startdate" DATETIME NOT NULL,
	"end_date" DATE NOT NULL,
	"prize_info" VARCHAR(255) NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"description" VARCHAR(255) NOT NULL,
	CONSTRAINT "Competitions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.HourseTypes" (
	"name" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "HourseTypes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Clubs" (
	"head_id" integer NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "Clubs_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Riders" (
	"person_id" integer NOT NULL,
	"id" serial NOT NULL,
	"title_id" integer NOT NULL,
	CONSTRAINT "Riders_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Person" (
	"f_name" VARCHAR(255) NOT NULL,
	"s_name" VARCHAR(255) NOT NULL,
	"l_name" VARCHAR(255) NOT NULL,
	"birthday" DATE NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "Person_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.HoursesOwners" (
	"hourse_id" integer NOT NULL,
	"person_id" integer NOT NULL,
	"startdate" DATE NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "HoursesOwners_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Titles" (
	"name" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "Titles_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.CompetitionsTypes" (
	"name" VARCHAR(255) NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "CompetitionsTypes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.CompetitionHoursesRider" (
	"hourse_id" integer NOT NULL,
	"id" serial NOT NULL,
	"rider_id" integer NOT NULL,
	"compition_id" integer NOT NULL,
	CONSTRAINT "CompetitionHoursesRider_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.CompitionsCompitionsTypes" (
	"compitions_types_id" integer NOT NULL,
	"compitions_id" integer NOT NULL,
	"id" serial NOT NULL,
	CONSTRAINT "CompitionsCompitionsTypes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Users" ADD CONSTRAINT "Users_fk0" FOREIGN KEY ("role_id") REFERENCES "Roles"("id");
ALTER TABLE "Users" ADD CONSTRAINT "Users_fk1" FOREIGN KEY ("person_id") REFERENCES "Person"("id");



ALTER TABLE "Products" ADD CONSTRAINT "Products_fk0" FOREIGN KEY ("sellable_id") REFERENCES "Hourses"("id");
ALTER TABLE "Products" ADD CONSTRAINT "Products_fk1" FOREIGN KEY ("seller_id") REFERENCES "Person"("id");

ALTER TABLE "Hourses" ADD CONSTRAINT "Hourses_fk0" FOREIGN KEY ("club_id") REFERENCES "Clubs"("id");
ALTER TABLE "Hourses" ADD CONSTRAINT "Hourses_fk1" FOREIGN KEY ("hourse_type_id") REFERENCES "HourseTypes"("id");



ALTER TABLE "Clubs" ADD CONSTRAINT "Clubs_fk0" FOREIGN KEY ("head_id") REFERENCES "Person"("id");

ALTER TABLE "Riders" ADD CONSTRAINT "Riders_fk0" FOREIGN KEY ("person_id") REFERENCES "Person"("id");
ALTER TABLE "Riders" ADD CONSTRAINT "Riders_fk1" FOREIGN KEY ("title_id") REFERENCES "Titles"("id");


ALTER TABLE "HoursesOwners" ADD CONSTRAINT "HoursesOwners_fk0" FOREIGN KEY ("hourse_id") REFERENCES "Hourses"("id");
ALTER TABLE "HoursesOwners" ADD CONSTRAINT "HoursesOwners_fk1" FOREIGN KEY ("person_id") REFERENCES "Person"("id");



ALTER TABLE "CompetitionHoursesRider" ADD CONSTRAINT "CompetitionHoursesRider_fk0" FOREIGN KEY ("hourse_id") REFERENCES "Hourses"("id");
ALTER TABLE "CompetitionHoursesRider" ADD CONSTRAINT "CompetitionHoursesRider_fk1" FOREIGN KEY ("rider_id") REFERENCES "Riders"("id");
ALTER TABLE "CompetitionHoursesRider" ADD CONSTRAINT "CompetitionHoursesRider_fk2" FOREIGN KEY ("compition_id") REFERENCES "Competitions"("id");

ALTER TABLE "CompitionsCompitionsTypes" ADD CONSTRAINT "CompitionsCompitionsTypes_fk0" FOREIGN KEY ("compitions_types_id") REFERENCES "CompetitionsTypes"("id");
ALTER TABLE "CompitionsCompitionsTypes" ADD CONSTRAINT "CompitionsCompitionsTypes_fk1" FOREIGN KEY ("compitions_id") REFERENCES "Competitions"("id");
















