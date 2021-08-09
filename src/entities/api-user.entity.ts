import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("api_user",{schema:"re"})
export class ApiUserEntity {

    @Column("varchar",{ 
        nullable:false,
        primary:true,
        length:50,
        name:"id",
        })
    id:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default:"",
        name:"application_id",
        })
    applicationId:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"server_public_key",
        })
    serverPublicKey:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"server_private_key",
        })
    serverPrivateKey:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"client_public_key",
        })
    clientPublicKey:string;
        

    @Column("longtext",{ 
        nullable:false,
        name:"client_private_key",
        })
    clientPrivateKey:string;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"status",
        })
    status:number;
        

    @Column("datetime",{ 
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"date_created",
        })
    dateCreated:Date;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date_locked",
        })
    dateLocked:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date_enabled",
        })
    dateEnabled:Date | null;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date_processing",
        })
    dateProcessing:Date | null;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default:"",
        name:"name",
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        default:"",
        name:"account",
        })
    account:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        default:"",
        name:"password",
        })
    password:string;
        

    @Column({
        type:"boolean",
        nullable:false,
        width:1,
        default:"0",
        name:"is_deleted",
        })
    isDeleted:boolean;
        

    @Column("datetime",{ 
        nullable:true,
        name:"date_deleted",
        })
    dateDeleted:Date | null;
        

    @Column("datetime",{ 
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"date_updated",
        })
    dateUpdated:Date;
        
}
