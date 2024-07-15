import React from 'react'
import Input from '../Form/Input'
import './AjoutEngin.scss'
function AjoutEngin() {
  return (
    <div className='AjoutEngin'>

        <div className='Engin'>
        

            <form>
                <span className="title">Ajout de voiture</span>
                <div className='row'>
                    <div className='left'>
                    <Input
                        type="text"

                        placeholder = "Marque de voiture"
                        name="marque"
                        className="input"
                    />
                   
                    
                        <Input
                            type="text"

                            placeholder = "matricule"
                            name="matricule"
                            className="input"
                        />
                        <input type="file" name="image"/>                       

                    </div>
                </div>
                <input type="submit" className='submit' value='enregistrer'/>
            </form>
        </div>
    </div>
  )
}

export default AjoutEngin