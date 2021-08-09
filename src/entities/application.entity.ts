import {Index,Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from "typeorm";


@Entity("application",{schema:"re"})
export class ApplicationEntity {

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
        name:"name",
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:200,
        name:"description",
        })
    description:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50,
        default:"",
        name:"host",
        })
    host:string;
        
}
