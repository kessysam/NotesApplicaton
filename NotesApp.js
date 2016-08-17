
/**
*This program is a simple NoteApplication archive
*/

class NotesApplication {
	
 	/**
 	*@param {String} author
 	* @param {String} notes
 	*/
 	constructor(author) {
 		this.author = author;
 		this.notes = [];
 	}
 	
 	
 	/**
 	* This function takes the note content
 	* as the parameter
 	* and adds it to the notes list of the object.
 	* @param {String} note_content
 	*/
 	create(note_content) {
 		
 		this.notes.push(note_content.toString());
 	}
 	
 	
 	/**
 	*This function lists out each of the notes in the notes list 
 	*/
 	listNotes() {
 		
 		for (var i = 0; i < notes.length; i++) {
 			console.log("Notes Id: " +i+"\n"+ notes[i] + "\n By" + " Author "+this.author);		 			
 		}		
 	}
 	
 	/**
 	* This function takes a note_id which refers to the index of the note in the notes list
 	* and returns the content of that note as a string.
 	* @param {Integer} note_id
 	*/
 	
 	getNote(note_id) {
 		
 		if(indexOf(note_id) !== -1){
 			return this.notes[note_id];
 		}
 		
 		return false;	
 	}
 	
 	/**
 	*This function take a search string, search_text and returns all the notes with that text within it
 	* @param {string} search_text
 	*/
 	
 	searchText(search_text) {

		notes = ['ghfh'];
 		if(this.notes.length === undefined) { 
 			return ("Notes not available");
 		}else if( search_text.toString().length ===  0) {
 			return ("Search test not available");
 		}
		
		
 		index = search_text.toString();
 		
	 	if(index.toString() !== 0) {	
		 	for(i = 0; i < this.notes.length; i++) {
		 		if(this.notes[i].indexOf(index) !== -1){
		 			console.log("Note ID: "+i+"\n"+this.notes[i].indexOf(index)+"\n"+"By Author "+this.author);
		 		}
		 		else {
		 			return ("Text not found");
		 		}
		 	}
		 	
	 	}
 	}
 	
	/**
	*This function deletes the note at the index note_id of the notes list
	*@param {Integer} note_id
	*/
	deleteNote(note_id) {

		if(this.notes[note_id]!== undefined) {
			delete this.notes[note_id];
		}
	}
	/**
	*This function replaces the content in the note at note_id with new_content
	*@param note_id
	*@param new_content
	*/
	edit(note_id, new_content) {
		
		if(this.notes[note_id]!== undefined) {
			this.notes[note_id] = new_content.toString();
		}
	}

}