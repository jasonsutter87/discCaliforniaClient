# Create 18 Holes
18.times do
	Hole.create(
		placement: ("A".."D").to_a.sample,
		distance: (200..340).to_a.sample,
		par: 3,
		stroke_count: (2..4).to_a.sample,
		card_id: 1
	 )
end



card = Card.create(
	course_name: "Rocklin Disc Golf course_id",
	player_name: "Jason Sutter",
	course_avg:  55,
	hole_count: 18,
	course_id: 1,
	player_id: 1
)

