# ex-sync.R
attach(input[[1]])
require(ggplot2)
setwd('/Users/jamesmargrove/Dropbox/Documents/Codeworks/project/coffee/coffee/server/Rcode/mean-monthly-rainfall')
coords <- c(xcoord, ycoord)
coords <- as.numeric(coords)
d = data.frame(x = coords[1], y = coords[2])
#coords <- c(117, 5)
mean_month = rep(0, 12)
require(raster)
require(rgdal)
months <- c("jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec")
for(i in 1:12){
 fileName = paste("p0", i, "dwd1a.tif",  sep="")
 r <- raster(fileName)
 e <- extent(coords[1]-2,coords[1]+2, coords[2]-2,coords[2]+2)
 ex <- crop(x = r, e)
 mean_month[i] = ex[40, 40]
 saveFile = paste('./../rainfall-maps/', months[i], '.jpg', sep='')
 saveFile
 ggSen <- as.data.frame(ex, xy = TRUE)
 colnames(ggSen) <- c("x","y","z")
 
 ggplot(ggSen) + geom_raster(aes(x, y, fill=z)) + 
   geom_point(data = d, aes(x=x, y=y, size = 5)) + 
   scale_fill_gradient(high="#191654", low="#43C6AC", name = "", 
                       breaks=c(0.22, 0.25, 0.28, 0.31, 0.34)) 
 
 ggsave(saveFile, height = 5, width = 5)
}


### Blue lagoon colours 


dt = data.frame(month = 1:12,  rain = mean_month)



p1 = ggplot(dt, aes(x=month, y=rain)) + 
  geom_point() + 
  geom_line() +
  ylim(min(dt$rain), max(dt$rain)) + 
  ylab('mean monthly rainfall (mm)') + 
  theme_classic() + 
  scale_x_continuous(breaks = dt$month, label = months)
p1
ggsave("./../rainfall-maps/monthly-data.jpg", height = 2.5, width = 5)
